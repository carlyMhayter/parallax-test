import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { align_center } from "../styles/mixins";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: orange;
  .fade-in {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }

  .fade-in.appear {
    opacity: 1;
  }

  .from-left {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .from-right {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .from-left,
  .from-right {
    transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in,
      -webkit-transform 400ms ease-in;
    opacity: 0;
  }

  .from-left.appear,
  .from-right.appear {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;

const Section = styled.section`
  background-color: teal;
  border: 3px solid red;
  height: 100vh;
  ${align_center}
  font-size: 5em;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;

  &.black {
    background-color: black;
  }
`;

const Dot = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background-color: pink;
`;
const Yellow = styled(Dot)`
  background-color: gold;
`;
const White = styled(Dot)`
  background-color: white;
`;

export default function Revealonscroll() {
  const [sectionsState, setSectionsState] = useState();
  const [slidersState, setSlidersState] = useState();

  useEffect(() => {
    const options = {
      rootMargin: "-200px",
      threshold: 0,
    };

    if (!sectionsState) {
      const sections = document.querySelectorAll(".fade-in");
      const sliders = document.querySelectorAll(".slide-in");

      setSectionsState(sections);
      setSlidersState(sliders);
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionsState) {
      sectionsState.forEach((section) => {
        observer.observe(section);
      });

      if (slidersState) {
        slidersState.forEach((slider) => {
          observer.observe(slider);
        });
      }
    }
  }, [sectionsState]);

  return (
    <Container>
      <Section>
        <Yellow className="fade-in" />
        <Dot className="fade-in" />
        <White className="slide-in from-right" />
        <p className="fade-in">lorem</p>
        <White className="slide-in from-left" />

        <Dot className="fade-in " />
        <Yellow className="fade-in" />
      </Section>
      <Section>
        <Yellow className="fade-in" />
        <White className="slide-in from-right" />

        <Dot className="fade-in" />
        <p className="fade-in">lorem</p>
        <Dot className="fade-in" />
        <White className="slide-in from-left" />

        <Yellow className="fade-in" />
      </Section>
      <Section>
        <White className="slide-in from-right" />

        <Yellow className="fade-in" />

        <Dot className="fade-in" />
        <p className="fade-in">lorem</p>
        <Dot className="fade-in" />
        <Yellow className="fade-in" />
        <White className="slide-in from-left" />
      </Section>
    </Container>
  );
}
