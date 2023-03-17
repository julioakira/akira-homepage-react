import React from "react";
import SectionTitle from "./About/SectionTitle";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center pt-14 pl-5 pr-5">
      <div>
        <SectionTitle title={title} />
        {children}
      </div>
    </div>
  );
}
