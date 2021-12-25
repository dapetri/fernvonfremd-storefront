import "./scss/index.scss";

import * as React from "react";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA_DE, SOCIAL_MEDIA_IT } from "../../core/config";
import Nav from "./Nav";
import { getLocale, Locale } from "../Locale/Locale";

const SM = getLocale() === Locale.DE ? SOCIAL_MEDIA_DE : SOCIAL_MEDIA_IT;

const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <div className="footer__favicons container">
      {SM.map(medium => (
        <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
      ))}
    </div>
    <Nav />
  </div>
);

export default Footer;
