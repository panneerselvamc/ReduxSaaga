import React from 'react';
import Lottie from 'react-lottie';
import Spinner from '../../Assets/json/spinner.json';
const SpinnerComponent =()=>{
    return(
        <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Spinner,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
            />
    )
}
export default SpinnerComponent;