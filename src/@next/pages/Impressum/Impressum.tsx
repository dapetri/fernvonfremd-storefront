import React from "react";
import styled from "styled-components";

import { smallScreen } from "@styles/constants";
import { useWindowDimensions } from "@hooks";
import { IProps } from "./types";

export const Impressum: React.FC<IProps> = ({}: IProps) => {
  const { width } = useWindowDimensions();
  // @ts-ignore
  const margine = width < smallScreen ? "5%" : "15%";

  const Body = styled.div`
    background: #fff;
    position: relative;
    padding-top: 60px;
    padding-left: ${margine};
    padding-right: ${margine};
    padding-bottom: 80px;
    color: #000;

    text-align: justify;
  `;

  return (
    <Body>
      <h3>Impressum</h3>
      <br />
      David Petri <br />
      fernvonfremd <br />
      Hans-Thoma-Straße 47 <br />
      69121 Heidelberg <br />
      Deutschland <br />
      <br />
      <a href="tel:+49 173 7777637">+49 173 7777637</a> <br />
      <a href="mailto:david@frenvonfremd.de">david@fernvonfremd.de</a> <br />
      <br />
      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br />
      <br />
      <h3>Haftung für Inhalte</h3>
      <br />
      <div>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </div>
      <br />
      <h3>Haftung für Links</h3>
      <br />
      <div>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </div>
      <br />
      <h4>
        Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36 VSBG:
      </h4>
      <br />
      <div>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit, die du unter{" "}
        <a href="https://ec.europa.eu/consumers/odr">
          https://ec.europa.eu/consumers/odr
        </a>{" "}
        findest. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
        bereit.
      </div>
    </Body>
  );
};
