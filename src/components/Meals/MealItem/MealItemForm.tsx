import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { ForwardedInput } from "../../UI/Input";
import classes from "./MealItemForm.module.css";

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

export default function MealItemForm({ id, onAddToCart }: MealItemFormProps) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    const enteredAmountNumber = enteredAmount ? +enteredAmount : 0;

    if (
      !enteredAmount ||
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <ForwardedInput
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
