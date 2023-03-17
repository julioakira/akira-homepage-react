import React from "react";
import Paragraph from "./Paragraph";

export default function TextBlock({ text }: { text: string }) {
  return (
    <div className="max-w-lg pt-5 pb-5">
      {text.split(/\r?\n/).map((p: string, i: number) => (
        <Paragraph key={`paragraph-${i}`} paragraph={p} />
      ))}
    </div>
  );
}
