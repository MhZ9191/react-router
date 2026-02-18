import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <section>
          <div>
            <Link to="/">HOME </Link>
            <Link to="/about">ABOUT </Link>
            <Link to="/products">PRODUCTS </Link>
          </div>
        </section>
      </header>
    </>
  );
}
