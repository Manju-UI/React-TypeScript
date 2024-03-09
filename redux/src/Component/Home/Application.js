import React from "react";
import { Link } from "react-router-dom";


function Application() {
  return (
    <div>
      <div><Link to="memo">Memo</Link></div>
      <div><Link to="notes">Notes</Link></div>
    </div>
  );
}

export default Application;
