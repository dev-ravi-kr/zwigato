import type { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
