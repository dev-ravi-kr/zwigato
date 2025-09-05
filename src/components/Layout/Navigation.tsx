import type { PropsWithChildren } from "react";

export default function Navigation({ children }: PropsWithChildren) {
  return (
    <>
      <nav>
        <ul>
          <li>ORDER NOW</li>
          <li>MENU</li>
          <li>{children}</li>
        </ul>
      </nav>
    </>
  );
}
