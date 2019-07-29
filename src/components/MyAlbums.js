import React from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Link} from "react-router-dom"



class MyAlbums extends React.Component {
  state = {
    albums: [],
  }
  componentDidMount(){
    axios.get("/api/MyAlbums").then(resp => (
      this.setState({
        albums: resp.data
      })
    ))
  }
  render() {
    return (
      <div className="container">
        <div className="homeview">
          <header>
            <h1>My Albums</h1>
          </header>
          <main className="tileview">
            {this.state.albums.map(item => (
              <div key={item.id} className="albumcover">
                <div className="albumpic">
                  <img src={item.coverimage}/>
                </div>
                <div className="albumname">
                  <Link to={`/Album/${item.id}`}>{item.name}</Link>
                </div>
              </div>
                    ))}
          </main>
        </div>
      </div>
    );
  }
}

export default MyAlbums