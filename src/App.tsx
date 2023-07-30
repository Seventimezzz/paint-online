import React from "react";

import ToolBar from "./components/Toolbar";
import SettingsBar from "./components/SettingBar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="app">
      <ToolBar></ToolBar>
      <SettingsBar></SettingsBar>
      <Canvas></Canvas>
    </div>
  )
}

export default App;
