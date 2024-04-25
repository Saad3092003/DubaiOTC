"use client";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" width={"208"} />
        </a>
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
              <a
                className="nav-link Paragraph p-0 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item p-0">
              <a className="nav-link Paragraph p-0" href="#">
                Features
              </a>
            </li>
            <li className="nav-item p-0">
              <a className="nav-link Paragraph p-0" href="#">
                Company
              </a>
            </li>
            <li className="nav-item p-0">
              <a className="nav-link Paragraph p-0" href="#">
                Knowledge
              </a>
            </li>
            <li className="nav-item p-0">
              <a className="nav-link Paragraph p-0" href="#">
                Support
              </a>
            </li>
          </ul>
          <div className="d-flex gap-4 align-items-center">
            <a
              className="nav-link p-0 fw-semibold text-white border-end border-light pe-4"
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
          </div>
        </div>
      </div>
    </nav>
  );
};
