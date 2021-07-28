import React from 'react';
import FirstComponent from './Components/FirstComponent';
import './App.css';
import store from './StateMangement/Store'
import { Provider } from "react-redux";
import Routes from './Routes/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;
