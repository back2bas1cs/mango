import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Component(s) 
// import NavBar from "./components/NavBar.jsx";
import Welcome from "./components/Welcome.jsx";
import ListeningRoom from "./components/ListeningRoom.jsx";

import SearchSpotify from "./components/SearchSpotify.jsx";
// import SongQueue from "./components/SongQueue.jsx";
import Chat from "./components/Chat.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <ListeningRoom /> : <Welcome />}
        </Route>
      </Switch>
     </BrowserRouter>

  );
}

export default App;