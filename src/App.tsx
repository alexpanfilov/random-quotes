import React from 'react';
import './App.css';
import GetQuotes from "./components/GetQuotes";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }`

function App() {
    return (
        <>
            <GlobalStyle />
            <GetQuotes/>
        </>
    );
}

export default App;
