import React, { Component } from 'react';
import DropdownMenu from './dropDownMenu';
export default class NavBar extends Component{
  render(){
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">{this.props.mainOption.name}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              {
                this.props.menuOptions.map(item => {
                  return (!item.subMenu) ?
                   <li className="nav-item" key={item.name}>
                    <a className="nav-link" href="#"> {item.name} </a>
                   </li> :
                    <li className="nav-item dropdown" key={item.name}>
                      {<DropdownMenu name={item.name} options={item.subMenu}/> }
                    </li>
                })
              }
              </ul>
            </div>
          </nav>
      </>
    );
  }
}