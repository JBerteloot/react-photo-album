import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'


class Photo extends React.Component {
  state = {
    photo: [],
    photname: [],
    photoframe: []
  }
  componentDidMount(){
    axios.get("/api/MyPictures").then(resp => (
      this.setState({
        photo: resp.data
      })
    ));
    axios.get('/api/MyPictures/' +  this.props.match.params.id).then(resp => {
      this.setState({
        photoname: resp.data.name
      })
    });
    axios.get("/api/MyPictures/").then(resp => {
      let photoframe = resp.data.filter((photo) => {
        return photo.id == this.props.match.params.id;
      })
      this.setState({
        photoframe: photoframe
      });
    })
  }

  render() {
    return (
      <div className="container">
        <div className="photoview">
          <header>
            <h1>{this.state.photoname}</h1>
          </header>
          <main className="tileview">
            <button className="left">&laquo;</button>
            {this.state.photoframe.map(item => (
              <div className="frame">
                <img src={item.url}/>
              </div>
                ))}
            
            <button className="right">&raquo;</button>
          </main>
        </div>
      </div>
    )
  }
}

export default Photo