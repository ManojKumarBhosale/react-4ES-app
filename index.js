import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import NavBar from './components/navBar';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      mainOption:{name:'Home', title:"", description:""},
      menuOptions:[
        {name:"Product", title:"", description:"Product Info"},
        {name:"Order", title:"", description:"Order Info"},
        {name:"Others", title:"", description:"Others",
          subMenu:[
            {name:"Sale", title:""},
            {name:"Purchase",title:""},
            {name:"Analyze",title:""}
          ]
        },
      ]
    };
  }

  render() {
    return (
      <>
      <div>
        <Hello name={this.state.name} />
      </div>
      <NavBar mainOption={this.state.mainOption} menuOptions={this.state.menuOptions}> </NavBar>
      <main>
      </main>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
