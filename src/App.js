import React from "react";
// import Login from "./Component/login";
import styles from './Component/component.module.scss'
import Headers from "./Component/header";
// import { ThemeProvider } from "@material-ui/styles";
// import { createTheme } from "@mui/material";
function App() {
  // const CustomFontTheme = createTheme({
  //   typography: {
  //     fontSize: 70,
  //     fontFamily:'sans-serif'
  //   }
  // });
  console.log(5)
  return (
    <div className={styles.bgApp}>
      <Headers />
    </div>
  );
}

export default App;
