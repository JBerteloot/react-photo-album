import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import 'normalize.css/normalize.css'
import '../styles/App.css'
import MyAlbums from "../components/MyAlbums"
import Album from "../components/Album"
import Photo from "../components/Photo"


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="container">
      {/* <MyAlbums></MyAlbums>
      <Album></Album>
      <Photo></Photo> */}
      <Route exact path="/" component={MyAlbums} />
      <Route exact path="/Album/:id" component={Album} />
      <Route path="/Photo/:id" component={Photo} />
      </div>
      </Router>
      
    );
  }
}

export default App