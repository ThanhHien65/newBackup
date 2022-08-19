import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Backup></Backup>}></Route>
          <Route path="/monitor" exact element={<Monitor></Monitor>}></Route>
          <Route path="/traffic" exact element={<Traffic></Traffic>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Dashboard;
