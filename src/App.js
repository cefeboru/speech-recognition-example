import './App.css';
import MicOffIcon from '@mui/icons-material/MicOff';
// import MicNoneIcon from '@mui/icons-material/MicNone';
import IconButton from '@mui/material/IconButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconButton className='mic-button' color='primary' aria-label="listen" size="large">
          <MicOffIcon className='mic-icon'/>
        </IconButton>
      </header>
    </div>
  );
}

export default App;
