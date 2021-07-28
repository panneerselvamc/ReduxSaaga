import React from 'react';
import OtpInput from "react-otp-input";
import './otp.css';
const OTP=({otp,setOtp,inputSize})=>{
    return(
        <div className="otpContainer">
        <OtpInput
        containerStyle={{justifyContent: 'space-evenly', display: 'flex', width: '100%'}}
        inputStyle={{border: '1px solid #d4dee7', height: '50px', width: '20px', fontFamily: 'Poppins-Regular'}}
        focusStyle={{border: '1px solid #05668d'}}
        value={otp}
        numInputs={inputSize}
        onChange={setOtp}
        separator={' '}
    />
    </div>
    )
}

export default OTP;