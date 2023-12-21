
import './index.css';
import {useState} from 'react';
function App() {
  const msg=["message one","message two","message three"];
  const [pg, setpg] = useState(1);


 function handlePre(){
  setpg(pg-1);
  
 }
 function handleNext(){
  setpg(pg+1);
 }




  return (
    <div className="page">

      <div className="number">
        <div id='p' className={pg===1?"active":""}>1</div>
        <div id='p' className={pg===2?"active":""}>2</div>
        <div id='p' className={pg===3?"active":""}>3</div>
      </div>

      <div className="message">
        {msg[pg-1]}
      </div>

      <div className="buttons">
        <button onClick={handlePre} >Previous</button>
        <button onClick={handleNext} >Next</button>
      </div>

    </div>
  );
}

export default App;
