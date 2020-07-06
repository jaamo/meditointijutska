import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "./components/Slider";
import Logo from "./components/Logo";

const Background = styled(motion.div)`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  left: -100px;
  right: -100px;
  top: -100px;
  bottom: -100px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 120s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Page = styled(motion.div)`
  position: relative;
  padding: 2rem;
`;

function App() {
  return (
    <>
      <Background>
        <BackgroundImage></BackgroundImage>
      </Background>
      <Page>
        <Logo></Logo>
        <Slider label="Rain" min={0} max={100}></Slider>
        <Slider label="Birds" min={0} max={100}></Slider>
        <Slider label="Sea" min={0} max={100}></Slider>
        <Slider label="Forest" min={0} max={100}></Slider>
        <Slider label="Piano" min={0} max={100}></Slider>
        <Slider label="Strings" min={0} max={100}></Slider>
        <Slider label="Drums" min={0} max={100}></Slider>
      </Page>
    </>
  );
}

export default App;
