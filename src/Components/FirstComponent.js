import React, { Component } from 'react'
import { connect } from 'react-redux';

 class FirstComponent extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.props.save(e.target.value)} />
                <b>{this.props.content}</b>
                
            </div>
        )
    }
}

const mapStateToProps = obj => {
    return {
     content:obj.content
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
     
      save: data => dispatch({ type: "savethetext", data: data }),
     
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(FirstComponent);