import React from "react";
import Body from "./Components/Quiz/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";


const App = () => {
  return <div className="container">
    <Provider store={appStore}>
      <Body />
    </Provider>
      
    </div>
  
};

export default App;
