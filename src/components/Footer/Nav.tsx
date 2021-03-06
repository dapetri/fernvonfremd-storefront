import * as React from "react";
import { Link } from "react-router-dom";

// import { NavLink } from "..";
// import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";

class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        <div className="container">
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">
              <Link to="/impressum">Impressum</Link>
            </h4>
            <h4 className="footer-nav__section-header">
              <Link to="/widerrufsbelehrung">Widerrufsbelehrung</Link>
            </h4>
            <h4 className="footer-nav__section-header">
              <Link to="/agb">AGB</Link>
            </h4>
            <h4 className="footer-nav__section-header">
              <Link to="/datenschutzbelehrung">Datenschutzbelehrung</Link>
            </h4>
            <h4 className="footer-nav__section-header">
              <Link to="/urheberrecht">Urheberrecht</Link>
            </h4>
          </div>
          {/* <TypedSecondaryMenuQuery>
            {({ data }) => {
              return data.shop.navigation.secondary.items.map(item => (
                <div className="footer-nav__section" key={item.id}>
                  <h4 className="footer-nav__section-header">
                    <NavLink item={item} />
                  </h4>
                  <div className="footer-nav__section-content">
                    {item.children.map(subItem => (
                      <p key={subItem.id}>
                        <NavLink item={subItem} />
                      </p>
                    ))}
                  </div>
                </div>
              ));
            }}
          </TypedSecondaryMenuQuery> */}
        </div>
      </footer>
    );
  }
}

export default Nav;
