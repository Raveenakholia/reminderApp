import React, { Component } from 'react';

const WithCounter =( WrappedComponent ,incremetnby = 5) =>{
   
    class WithCounter extends Component{
        constructor(props){
            super(props);
            this.state=({
                count:0
            })
        }
    
        clickHandler=()=>{
            this.setState({count:this.state.count+incremetnby})
        }
       
        render(){
            return <WrappedComponent count={this.state.count}  clickFun={this.clickHandler} {...this.props}/>
        }
    }
    return WithCounter;
}

export default WithCounter;