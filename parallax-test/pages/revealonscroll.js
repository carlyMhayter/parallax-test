import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { align_center } from "../styles/mixins";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: orange;
  .fade-in {
    opacity: 0;
    transition: opacity 250ms ease-in;
  }
  .fade-in.appear {
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

  &.black {
    background-color: black;
  }
`;

export default function Revealonscroll() {
  const [sectionsState, setSectionsState] = useState();

  useEffect(() => {
    const options = {
      rootMargin: "-200px",
    };

    if (!sectionsState) {
      const sections = document.querySelectorAll(".fade-in");
      setSectionsState(sections);
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          console.log(entry.target);
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionsState) {
      sectionsState.forEach((section) => {
        observer.observe(section);
      });
      console.log("hello");
    } else {
      console.log("goodbye");
    }
  }, [sectionsState]);

  return (
    <Container>
      <Section>
        <h1>section 1</h1>
        <p className="fade-in">lorem</p>
      </Section>
      <Section className="fade-in"> section 2</Section>
      <Section className="fade-in">section 3</Section>
    </Container>
  );
}
