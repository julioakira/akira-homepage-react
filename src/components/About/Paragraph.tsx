import React from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  return <p className="text-justify indent-8">{paragraph}</p>;
}
