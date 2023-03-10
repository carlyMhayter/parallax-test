import Head from "next/head";
import styled from "styled-components";
import { align_center } from "../styles/mixins";

// wrapper for scrolling
const ParallaxWrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
`;

const ParallaxGroup = styled.div`
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
`;
const IntroScreen = styled(ParallaxGroup)`
  height: 100vh;
  background-color: tomato;
  ${align_center}
  z-index: 5;
`;
const OutroScreen = styled(ParallaxGroup)`
  height: 100vh;
  background-color: teal;
  ${align_center}
`;

const Group1 = styled(ParallaxGroup)`
  > div:first-child {
    background-color: lime;
  }
`;
const Group2 = styled(ParallaxGroup)`
  > div:first-child {
    background-color: yellow;
  }
`;

const ParallaxLayer = styled.div`
  position: absolute;
  inset: 0;
  ${align_center}
`;

const BaseLayer = styled(ParallaxLayer)`
  transform: translateZ(-300px);
`;
const MidLayer = styled(ParallaxLayer)`
  transform: translateZ(0);
`;
const TopLayer = styled(ParallaxLayer)`
  transform: translateZ(200px);
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Parallax Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParallaxWrapper>
        <IntroScreen> Intro Screen</IntroScreen>
        <Group1>
          <BaseLayer>Base Layer</BaseLayer>
          <MidLayer>Mid Layer</MidLayer>
        </Group1>
        <Group2>
          <MidLayer>Mid Layer</MidLayer>
          <TopLayer>Top Layer</TopLayer>
        </Group2>
        <OutroScreen>Outro Screen</OutroScreen>
      </ParallaxWrapper>
    </>
  );
}
