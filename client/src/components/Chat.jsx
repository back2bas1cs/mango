import React, { useState } from "react";

function Chat() {
  const [chatInput, setChatInput] = useState("");

  
  const handleTyping = e => {
    e.preventDefault();
    setChatInput(e.target.value);
  }

  const handleSubmitMessage = e => {
    e.preventDefault();

  }

  return (
    <div>
      <form > 
        <div id="chat"></div> 
        <input onChange={handleTyping} value={chatInput} type="text" placeholder="Send a message" autoComplete="off"/>
      </form>
    </div>
  );
}

export default Chat;