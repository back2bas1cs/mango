import React from "react";

function Welcome() {
  
  const handleLogin = e => {
    e.preventDefault();
    
  }

  return (
    <div className="welcome">
      <button onClick={handleLogin}>LOGIN (MUST HAVE SPOTIFY PREMIUM)</button>
    </div>
  );
}

export default Welcome;