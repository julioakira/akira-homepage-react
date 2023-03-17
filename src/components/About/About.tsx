import React, { ReactElement } from "react";

import MainFigure from "./MainFigure";
import Work from "./Work";
import Bio from "./Bio";
import Interests from "./Interests";

export default function About(): ReactElement<"section"> {
  return (
    <section id="about" className="bg-cornsilk dark:bg-bunker">
      <MainFigure />
      <Work />
      <Bio />
      <Interests />
    </section>
  );
}
