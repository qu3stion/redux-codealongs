import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


//BELOW IS THE FUNCTIONALITY WHICH IS MADE GLOBAL
//  IN INDEX.JS

  // state = {
  //   age:21
  // }
  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // }
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // }
class App extends Component {

 render() {
  return (
    <div className="App">
      <div className="header">
        <div className="age">
        Age: <span>{this.props.age}</span>
        </div>
        <button className="ageUp" onClick={this.props.onAgeUp}>
          Age Up
        </button>
        <button className="ageDown" onClick={this.props.onAgeDown}>
          Age Down
        </button>
      </div>

      <hr />
      <div>History</div>
        <div>
          <ul>
          {
            this.props.history.map(elmnt => (
              <li
                className="historyItem"
                key={elmnt.id}
                onClick={() => this.props.onDelEntry(elmnt.id)}>

                {elmnt.age}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
   );
  }
}

const mapStateToProps = state => {
  return {
    age:state.age,
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({type:'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'}),
    onDelEntry: (id) => dispatch({type: 'DEL_ENTRY', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
