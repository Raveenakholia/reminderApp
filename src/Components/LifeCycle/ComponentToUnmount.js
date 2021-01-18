import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class ComponentToUnmount extends Component {
   
    componentWillUnmount(){
        console.log('component will unmount called')
    }
    render() {
        return (
            <div id="comp">
               <label>Raveena</label>
            </div>
        );
    }
}



export default ComponentToUnmount;