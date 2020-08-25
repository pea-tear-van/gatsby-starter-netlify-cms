import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-white">
        <div className="container has-background-primary has-text-white">
          <div className="columns">
            <div className="column is-6-desktop is-offset-1">
              <section>
                <p>
                  <span className="has-text-weight-bold">Phone:</span> 1300 MCS
                  AUS (1300 627 287)
                  <br />
                  <span className="has-text-weight-bold">Address:</span> PO Box
                  743 Gordon NSW 2072
                  <br />
                  <span className="has-text-weight-bold">ABN:</span> 62 095 388
                  533 | Copyright &copy; 2019 MCS Group
                </p>
                <nav
                  className="navbar footer-navigation"
                  role="navigation"
                  aria-label="secondary-navigation"
                >
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/services">
                    Services
                  </Link>
                  <Link className="navbar-item" to="/testimonials">
                    Testimonials
                  </Link>
                  <Link className="navbar-item" to="/resources">
                    Resources
                  </Link>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </nav>
              </section>
            </div>
            <div className="column is-4-desktop has-text-weight-semibold">
              <section>
                MCS Group is a privately owned Australian national company
                specialising in the provision of independent specialist
                technical reports to the Insurance industry, government agencies
                and private individuals.
              </section>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
