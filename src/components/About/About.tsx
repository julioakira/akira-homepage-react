import React, { ReactElement } from "react";

import MainFigure from "./MainFigure";

export default function About(): ReactElement<"section"> {
  return (
    <section id="about" className="bg-blue-300 lg:pl-60 lg:pr-60 ml-30 mr-30">
      <MainFigure />
      <MainFigure />
      <MainFigure />
    </section>
  );
}
