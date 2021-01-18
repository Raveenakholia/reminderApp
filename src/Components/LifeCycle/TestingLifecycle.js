import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestingLifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor method called');
        this.state ={
            count:0,
            x:0,
            y:0
        }

    }

    mouseMovement=(e)=>{
       this.setState({x:e.clientX,y:e.clientY})
    }

    componentDidMount() {
        //console.log('component rendered successfully')
        //document.title = `you have clicked ${this.state.count} times`
        window.addEventListener('mousemove' , this.mouseMovement)
    }

    

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log('shouldcomponent called');
    //   return true;
      
    // }

    

    // componentDidUpdate(prevProps, prevState) {
    //    console.log('component did update called')
    //     document.title = `you have clicked ${this.state.count} times`
    // }

    componentWillUnmount() {
      console.log('component will unmount called');
    }

     handleClick=()=>{
       this.setState({
           count: this.state.count+1
       })
     }
    render() {
        console.log('render method called');
        return (
            <div>
              X - {this.state.x}  Y - {this.state.y}
              <button onClick={this.handleClick}>Click to increase counter</button>
            </div>
        );
    }
}

TestingLifecycle.propTypes = {

};

export default TestingLifecycle;