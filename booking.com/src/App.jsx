
import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <Button variant="contained" color='inherit'  onClick={()=>alert("hello")}>Demo btn</Button>
     </div>
  );
}

export default App;
