import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalTab = () => {
  return (
    <TabContainer>
      <Link to="/act">Act</Link>
      <Link to="/classic">Classic</Link>
      <Link to="/dancing">Dancing</Link>
      <Link to="/exhibition">Exhibition</Link>
      <Link to="/festival">Festival</Link>
      <Link to="/magic">Magic</Link>
      <Link to="/musical">Musical</Link>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 6.75rem;
  height: 400px;
  /* justify-content: space-evenly; */

  background-color: rgba(185, 33, 25, 0.5);
  position: fixed;
  top: 200px;
  z-index: 10;
  text-align: center;
  gap: 6.5vh;
`;

export default ModalTab;
