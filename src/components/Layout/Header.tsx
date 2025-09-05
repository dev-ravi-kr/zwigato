import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from "./Navigation";
import Section from "./Section";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        {/* logo */}
        <h1>Zwigato-Food Delivery</h1>
        {/* navigation links */}
        <Navigation />
        <HeaderCartButton />
      </header>
      <Section>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
      </Section>
    </>
  );
}
