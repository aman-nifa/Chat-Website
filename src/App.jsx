import { useState } from "react";
import Regster from "./users/Regster";
import Login from "./users/Login";
// import Header from "./componenets/Header";
// import Sdebar from "./componenets/Sdebar";
import Chat from "./chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sdebar from "./componenets/Sdebar";

function App() {
  return (
    <>
      <Router>
          
        
        
        

        <Routes>
          <Route path="/" element={<Sdebar />} />
          <Route path="/regster" element={<Regster />} />
          <Route path="/logn" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
