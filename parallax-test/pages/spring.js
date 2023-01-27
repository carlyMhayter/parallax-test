import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import person from "../public/person.svg";
import tree from "../public/tree.jpeg";

export default function Spring() {
  return (
    <div>
      <Parallax pages={6}>
        <ParallaxLayer offset={0} style={{ backgroundColor: "pink" }}>
          <h2>Welcome to the parallax.</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5} sticky={{ start: 1, end: 3.5 }}>
          <Image src={person} height={600} width={100} />
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            backgroundColor: "salmon",
          }}
          offset={2}
        >
          Here is some more text.
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            backgroundColor: "green",
          }}
          offset={3}
        >
          <Image src={person} height={600} width={100} />
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            backgroundColor: "aqua",
          }}
          offset={4}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={5}
          style={{
            backgroundColor: "gold",
          }}
        >
          toots
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
