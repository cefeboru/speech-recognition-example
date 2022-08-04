import "./App.css";

import React from "react";
import MicOffIcon from "@mui/icons-material/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";

function App() {
  const [isLestening, setIsListening] = React.useState(false);

  const Icon = isLestening ? MicIcon : MicOffIcon;

  const handleMouseDown = () => {
    setIsListening(true);
  };

  const handleMouseUp = () => {
    setIsListening(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <IconButton
          className="mic-button"
          color="primary"
          aria-label="listen"
          size="large"
        >
          <Icon
            className="mic-icon"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />
        </IconButton>
      </header>
    </div>
  );
}

export default App;
