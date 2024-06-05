"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = ({ type }) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    const path = window.location.pathname;
    const pathArr = path.split("/");
    setActive(pathArr[1]);
  }, []);

  // code to check the route of current page
  return (
    <nav
      className={`navbar ${
        type === "plain" ? "navbar-light" : "navbar-dark"
      } navbar-expand-lg`}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img alt="DubaiOTC" src="images/logo.png" width={"208"} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ gap: "36px" }}
          id="navbarTogglerDemo01"
        >
          <ul
            style={{ gap: "32px" }}
            className="navbar-nav ms-auto mb-2 mb-lg-0"
          >
            <li className="nav-item p-0">
              <Link
                className={`nav-link Paragraph p-0 ${
                  active === "" && "active"
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item p-0">
              <Link
                className={`nav-link Paragraph p-0 ${
                  active === "service" && "active"
                }`}
                href="/service"
              >
                Services
              </Link>
            </li>
            <li className="nav-item p-0">
              <Link
                className={`nav-link Paragraph p-0 ${
                  active === "company" && "active"
                }`}
                href="/company"
              >
                Company
              </Link>
            </li>
            <li className="nav-item p-0">
              <Link
                className={`nav-link Paragraph p-0 ${
                  active === "support" && "active"
                }`}
                href="/support"
              >
                Support
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-4 align-items-center">
            <a
              className={`nav-link p-0 fw-semibold border-end ${
                active === "" || active === "service"
                  ? "border-light text-white"
                  : "text-dark"
              } pe-4`}
              href="#"
            >
              Login
            </a>
            <button
              className="btn btn-primary rounded-pill"
              style={{ padding: "12px 33px" }}
            >
              Register
            </button>
            <a
              className="nav-link p-0"
              href="https://t.me/DubaiOTCofficial"
              target="_blank"
            >
              <img alt="DubaiOTC" src="/images/telegram-icon.png" width={46} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
