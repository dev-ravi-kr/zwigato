import type { PropsWithChildren } from "react";
import classes from "./Card.module.css";

export default function Card({ children }: PropsWithChildren) {
  return (
    <>
      <div className={classes.card}>{children}</div>
    </>
  );
}
