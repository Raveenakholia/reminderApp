import React, { Component } from 'react';
import WithCounter from './WithCounter';
class HeadingHover extends Component {
    state={
        count:0
    }
    
    mouseHandler=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
        return (
            <div>
                <p onMouseOver={this.props.clickFun} class="h1"> Hovered  this {this.props.count} times</p>
                <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
            </div>
            
        );
    }
}

export default WithCounter(HeadingHover,10);