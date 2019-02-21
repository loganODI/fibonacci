import React from 'react';
import ReactDOM from 'react-dom'

export default class Navbar extends React.Component{
    render() {
        return (
          <div>
          <ul id="nav">
                <li><a href="#">Add</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
          </div>
        )
      }
}
