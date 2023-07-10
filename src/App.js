import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [state,setState]=useState(false)
  const toggleExpand = () =>{
    setState(!state);
  }
  return (
      <div>
        <h1>Conditional Rendering</h1>
        {!state ? (
            <button onClick={toggleExpand}>Xem giới thiệu</button>
        ) : (
            <div>
              <button onClick={toggleExpand}>Đóng giới thiệu</button>
              <p>Nội dung giới thiệu</p>
            </div>
        )}
      </div>
  );
}

export default App;
