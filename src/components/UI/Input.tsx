import { forwardRef } from "react";

import classes from "./Input.module.css";

export interface InputProps {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
}

export default function Input(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
}

export const ForwardedInput = forwardRef<HTMLInputElement, InputProps>(Input);
