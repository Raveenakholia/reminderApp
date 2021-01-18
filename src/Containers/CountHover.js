import React, { Component } from 'react';
import WithCounter from './WithCounter';

class CountHover extends Component {
   
    render() {
        const {count , clickFun} = this.props;
        return (
            <div>
              <button className="btn btn-outline-success" 
                data-toggle="tooltip" 
                data-placement="top" 
                title="Button to click"
                type="button"
               onClick={clickFun}>{this.props.name}Cilcked {count} times</button>

                {/* <button type="button" onClick={clickFun} class="btn btn-primary">
                Clicked <span class="badge badge-light">{count}</span>
                </button> */}
                
               
            </div>
        );
    }
}

export default WithCounter(CountHover);