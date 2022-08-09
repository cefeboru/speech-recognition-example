import "./App.css";

import React from "react";
import MicOffIcon from "@mui/icons-material/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const Icon = listening ? MicIcon : MicOffIcon;

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({
      language: "es-HN",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Broswer is not supported!</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Tooltip
          title={
            listening
              ? "Listening..."
              : "Keep button pressed to start listening"
          }
        >
          <IconButton
            className="mic-button"
            color="primary"
            aria-label="listen"
            size="large"
            onMouseDown={startListening}
            onMouseUp={stopListening}
            onTouchStart={startListening}
            onTouchEnd={stopListening}
            onTouchCancel={stopListening}
          >
            <Icon className="mic-icon" />
          </IconButton>
        </Tooltip>
        <div>{transcript}</div>
      </header>
    </div>
  );
}

export default App;
