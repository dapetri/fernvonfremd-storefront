import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "@hooks";
import { IProps } from "./types";
import { fvf3, smallScreen } from "../../globalStyles/constants";

export const AGB: React.FC<IProps> = ({}: IProps) => {
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

  const H2 = styled.h3`
    color: ${fvf3};
  `;

  const H4 = styled.h4`
    color: ${fvf3};
  `;

  const Ul = styled.ul`
    list-style-type: disc;
    margin-left: 30px;
  `

  return (
    <>
      <Body>
        <H2>AGB</H2>
        <h5>Allgemeine Geschäftsbedingungen mit Kundeninformationen</h5>
        <br />
        <H4>Inhaltsverzeichnis</H4>
        <div>
          1) Geltungsbereich
          <br />
          2) Vertragsschluss
          <br />
          3) Widerrufsrecht <br />
          4) Preise und Zahlungsbedingungen
          <br />
          5) Liefer- und Versandbedingungen
          <br />
          6) Einräumung von Nutzungsrechten für digitale Inhalte
          <br />
          7) Eigentumsvorbehalt <br />
          8) Mängelhaftung (Gewährleistung)
          <br />
          9) Anwendbares Recht
          <br />
          10) Alternative Streitbeilegung
          <br />
        </div>
        <br />
        <H4>1) Geltungsrecht</H4>
        <br />
        <div>
          1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") des
          David Petri, handelnd unter "fernvonfremd" (nachfolgend "Verkäufer"),
          gelten für alle Verträge über die Lieferung von Waren, die ein
          Verbraucher oder Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer
          hinsichtlich der vom Verkäufer in seinem Online-Shop dargestellten
          Waren abschließt. Hiermit wird der Einbeziehung von eigenen
          Bedingujngen des Kunden widersprochen, es sei denn, es ist etwas
          anderes vereinbart.
        </div>
        <br />
        <div>
          1.2 Für Verträge über die Lieferung digitaler Inhalte gelten diese AGB
          entsprechend, sofern insoweit nicht ausdrücklich etwas Abweichendes
          geregelt ist.
        </div>
        <br />
        <div>
          1.3 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die
          ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer
          gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
          zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine
          natürliche oder juristische Person oder eine rechtsfähige
          Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in
          Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit
          handelt.
        </div>
        <br />
        <div>
          1.4 Digitale Inhalte im Sinne dieser AGB sind alle nicht auf einem
          körperlichen Datenträger befindlichen Daten, die in digitaler Form
          hergestellt und vom Verkäufer unter Einräumung bestimmter in diesen
          AGB genauer geregelten Nutzungsrechte, bereitgestellt werden.
        </div>
        <br />
        <H4>2) Vertrangsschluss</H4>
        <br />
        <div>
          2.1 Die im Online-Shop des Verkäufers enthaltenen
          Produktbeschreibungen stellen keine verbindlichen Angebote seitens des
          Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots
          durch den Kunden.
        </div>
        <br />
        <div>
          2.2 Der Kunde kann das Angebot über das in den Online-Shop des
          Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der
          Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb
          gelegt und den elektronischen Bestellprozess durchlaufen hat, durch
          Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich
          verbindliches Vertragsangebot in Bezug auf die im Warenkorb
          enthaltenen Waren ab.
        </div>
        <br />
        <div>
          2.3 Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen
          annehmen,
        <br />
        <br />
          <Ul>
            <li>
              indem er dem Kunden eine schriftliche Auftragsbestätigung oder
              eine Auftragsbestätigung in Textform (Fax oder E-Mail)
              übermittelt, wobei insoweit der Zugang der Auftragsbestätigung
              beim Kunden maßgeblich ist, oder
            </li>
        <br />
            <li>
              dindem er dem Kunden die bestellte Ware liefert, wobei insoweit
              der Zugang der Ware beim Kunden maßgeblich ist, oder
            </li>
        <br />
            <li>
              indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung
              auffordert.
            </li>
          </Ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Body>
    </>
  );
};
