import React from 'react';
import FirstComponent from './Components/FirstComponent';
import './App.css';
import store from './StateMangement/Store'
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <FirstComponent/>
    </Provider>
  );
}

export default App;
