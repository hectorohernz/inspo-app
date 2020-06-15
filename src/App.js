import React from 'react';
import './App.css';
import content from './content.json';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photos:content
    }
  }
 
  render() {
    return (
      <section className="main">
        <nav className="nav">
          <h1>KIN</h1>
          <p>Created By Hector</p>
        </nav>
        <div className="draggable-photos">
          {this.state.photos.content.map( item => 
            <img src={item.link}/>
          )}
        </div>
      </section>
    )
  }
}

export default App;
