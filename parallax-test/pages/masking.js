import React from "react";
import styled, { keyframes } from "styled-components";
import beach from "../public/beach.jpg";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;

  svg rect {
    fill: white;
    mask: url(#mask);
  }
`;
const grow = keyframes`
    0% {font-size: 100em; opacity: 0}
    35%{font-size: 30em;opacity: 1}
    50% {font-size: 30em;opacity: 1}
     75% {font-size: 30em;opacity: 1}
    100% {font-size: 100em; opacity: 0}
`;
const SVG = styled.svg`
  height: 100%;
  width: 100%;
  font-family: serif;
  font-weight: 800;
  font-size: 40em;
  position: absolute;
  animation-name: ${grow};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

export default function Masking() {
  return (
    <Background style={{ backgroundImage: `url(${beach.src})` }}>
      <SVG>
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" />
            <text x="0%" y="50%">
              hello
            </text>
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" />
      </SVG>
    </Background>
  );
}
