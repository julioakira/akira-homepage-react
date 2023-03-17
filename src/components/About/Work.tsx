import React from "react";
import TextBlock from "./TextBlock";
import Section from "../Section";

export default function Work() {
  return (
    <Section title='About'>
      <TextBlock
        text={`Hello, there! I'm Julio Akira, a full-stack developer based in Osasco/São Paulo who is passionate about building software and digital services from the conception of the idea to the planning, designing and implementation. I strive to write high-quality, clean code, keeping in mind that code is a tool to solve modern real-life problems. When not writing software, you can find me brewing coffee, reading a book or playing videogames.`}
      />
    </Section>
  );
}
