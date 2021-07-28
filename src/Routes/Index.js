import React from "react";
import Header from "../Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SpinnerComponent from "../Components/Loader/Spinner"; 
import FirstComponent from "../Components/FirstComponent";
import LatestAbout from "../Components/About/LatestAbout";
import Index from "../Components/Login/Index";
import ForgotPassword from "../Components/UpdatePassword/ForgotPassword";
import ResetPassword from "../Components/UpdatePassword/ResetPassword";
import AddBlog from "../Components/Blog/Index";
const Home = React.lazy(() => import('../Components/Home/Index')); 
const About =  React.lazy(() => import("../Components/About"));
const SignUp =    React.lazy(() => import("../Components/Signup/Index"));
const Loader = React.lazy(()=>import('../Components/Loader/Loader'));
const Routes = () => {
  return (
    <>
    
        <React.Suspense fallback={SpinnerComponent}>
          <BrowserRouter>
          {/* <SpinnerComponent/> */}
          <Header/>
            <Switch>
              <Route path="/home" component={Home} />
              {/* <Route path="/about" component={About} /> */}
              <Route path="/signup" component={SignUp} />
              <Route path="/about" component={LatestAbout} />
              <Route path="/signin" component={Index} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/add-blog" component={AddBlog} />
            </Switch>
          </BrowserRouter>
        </React.Suspense>
      
    </>
  );
};
export default Routes;
