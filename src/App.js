import React from "react";
import "./App.css";
import Appbar from "./components/Navbar";
import { Provider } from "./context";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Provider>
      <div className="App">
        <Container maxWidth="sm">
          <Box mx="auto" p={2}>
            <Appbar />
            <AddTask />

            <Tasks />
          </Box>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
