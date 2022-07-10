import { Main } from "./component";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  // const height = window.innerHeight;
  return (
    <Router>
      <Main />
    </Router>
  );

  //  <div style={{background:"silver",height:height,display:"flex",justifyContent:"center",alignItems:"center"}}>
  //  </div>
}

export default App;
