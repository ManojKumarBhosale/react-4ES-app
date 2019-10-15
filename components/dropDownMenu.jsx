import React, {Component} from 'react';

export default class DropDownMenu extends Component{
  /*constructor(){
    super(this);
  }*/
  render(){
    return (
      <>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {this.props.name} </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {
            this.props.options.map(item => <a key={item.name} className="dropdown-item" href="#"> {item.name} </a>)
          }
        </div>
      </>
    );
  }
}