import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'

class Album extends React.Component {
  state = {
    albums: [],
    album: [],
    albumName: "",
    albPhoto: []
  }
  componentDidMount(){
    axios.get("/api/MyAlbums").then(respo => {
      this.setState({
        albums: respo.data,
      })
  });
    axios.get('/api/MyAlbums/' + this.props.match.params.id).then(resp => {
      this.setState({
        albumName: resp.data.name
      })
   });
    axios.get("/api/MyPictures/").then(resp => {
      this.setState({
        album: resp.data
      })
    });
    axios.get("/api/MyPictures/").then(resp => {
      let albPhoto = resp.data.filter((photo) => { 
      return photo.MyAlbumId == this.props.match.params.id
      })
      this.setState({ 
      albPhoto: albPhoto
      });
    })
  };
  
  componentWillReceiveProps(nextProps) {
    var nextalbumId = nextProps.match.params.id;
    if (nextalbumId !== this.props.match.params.id) {
      
      axios.get("/api/MyPictures/").then(resp => {
        let albPhoto = resp.data.filter((photo) => {   
          return photo.MyAlbumId == nextalbumId;
        })
        this.setState({ 
          albPhoto: albPhoto
        });
      })
      axios.get('/api/MyAlbums/' + nextalbumId).then(resp => {
        this.setState({
          albumName: resp.data.name
        })
     });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="albumview">
          <header>
            <h1>{this.state.albumName}</h1>
          </header>
          <main className="photogallery">
            <aside className="albumlist">
              <ul>
                {this.state.albums.map(item => (
                  <li key={item.id}><Link id="url" to={`/Album/${item.id}`}>{item.name}</Link></li>
                ))}
              </ul>
            </aside>

            <div className="tileview">
              {this.state.albPhoto.map(photo =>(
                <div key={photo.id}
                className="albumcover">
                  {/* <div className="albumcover"> */}
                    <div className="albumpic">
                      <img src={photo.url}/>
                    </div>
                    <div className="photoname">
                      <Link to={`/Photo/${photo.id}`}>{photo.name}</Link>
                    </div>
                  {/* </div> */}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Album