import React from 'react';
import SpinnerComponent from './Spinner';
import { connect } from "react-redux";

const Loader=({isProcessing})=>{
    console.log(isProcessing);
    return(
        <>
       {
           isProcessing &&  <SpinnerComponent/>
       }
       </>
    )
}
const mapStateToProps = (state) => {
    return {
        isProcessing:state.AuthReducer.isProcessing
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
     
    };
  };
  
  // export default SignUp;
  export default connect(mapStateToProps, mapDispatchToProps)(Loader);
  
