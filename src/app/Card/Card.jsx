"use client";
import { useState } from "react";
import "./card.scss";
import custom from "./custom.module.scss";
import clsx from "clsx";

export default function Card() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className={clsx("card", { [custom.card]: expanded })}>Card</div>
      <div className={clsx("card", custom.card, { expanded })}>
        <div className="card-header" onClick={() => setExpanded(!expanded)}>
          Card
        </div>
        {expanded && <div className="card-body">Card Body</div>}
      </div>
    </>
  );
}
