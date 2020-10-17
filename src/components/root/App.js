import React, { useContext, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import { globalState as GlobalState } from "../../context";
import { mainReducer } from "../../reducers/index";
import { appStyle } from "./App.style";
import LeftDivision from "../left/LeftDivision";
import RightDivision from "../right/RightDivision";
import NavBar from "../NavBar/NavBar";
import "./App.style.js";

function App() {
  const classes = appStyle();
  // Initial State (Default App data)
  const initialState = useContext(GlobalState);
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Grid container className={classes.root}>
      <NavBar />
      <GlobalState.Provider value={{ state, dispatch }}>
        <Grid item xs={12} className={classes.parentDiv}>
          <Grid container justify="center" alignItems="center">
            {/* Display Left List */}
            <Grid item xs={4}>
              <LeftDivision />
            </Grid>

            {/* Display Right List */}
            <Grid item xs={4}>
              <RightDivision />
            </Grid>
          </Grid>
        </Grid>
      </GlobalState.Provider>
    </Grid>
  );
}

export default App;
