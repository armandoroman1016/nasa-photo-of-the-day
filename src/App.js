import React from "react";
import "./App.scss";
import Header from './components/header-components/header'
import TextContent from "./components/image-text-components/text-content";



function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header />
      <TextContent />
    </div>
  );
}

export default App;
