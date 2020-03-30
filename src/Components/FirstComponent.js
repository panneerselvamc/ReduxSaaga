import React, { Component } from 'react'
import { connect } from 'react-redux';

 class FirstComponent extends Component {
     componentDidMount(){
         console.log(this.props)
     }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.props.save(e.target.value)} />
                <h1><b>{this.props.content}</b></h1>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
     content:state.FirstPage.text
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
     
      save: data => dispatch({ type: "savethetext", data: data }),
     
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(FirstComponent);