import React from "react";

import GlobalStyles from "./GlobalStyles";

import styled from "styled-components";

import Header from "./components/Repeat/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Act from "./pages/Act";
import Classic from "./pages/Classic";
import Dancing from "./pages/Dancing";
import Exhibition from "./pages/Exhibition";
import Festival from "./pages/Festival";
import Korean from "./pages/Korean";
import Magic from "./pages/Magic";
import Musical from "./pages/Musical";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/act" element={<Act />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/dancing" element={<Dancing />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/korean" element={<Korean />} />
          <Route path="/magic" element={<Magic />} />
          <Route path="/musical" element={<Musical />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 150px;
  height: 600px;
  padding: 0;
  margin: 0;
  background-color: lightblue;
`;

export default App;
