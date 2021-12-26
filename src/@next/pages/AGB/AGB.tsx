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
  `;

  return (
    <>
      <Body>
        <H2>AGB</H2>
        <br />
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
          1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend
          &quot;AGB&quot;) des David Petri, handelnd unter
          &quot;fernvonfremd&quot; (nachfolgend &quot;Verkäufer&quot;), gelten
          für alle Verträge über die Lieferung von Waren, die ein Verbraucher
          oder Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer hinsichtlich
          der vom Verkäufer in seinem Online-Shop dargestellten Waren
          abschließt. Hiermit wird der Einbeziehung von eigenen Bedingujngen des
          Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.
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
        <div>
          Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in
          dem Zeitpunkt zustande, in dem eine der vorgenannten Alternativen
          zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag
          nach der Absendung des Angebots durch den Kunden zu laufen und endet
          mit dem Ablauf des fünften Tages, welcher auf die Absendung des
          Angebots folgt. Nimmt der Verkäufer das Angebot des Kunden innerhalb
          vorgenannter Frist nicht an, so gilt dies als Ablehnung des Angebots
          mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung
          gebunden ist.
        </div>
        <br />
        <div>
          2.4 Bei Auswahl der Zahlungsart „PayPal Express“ erfolgt die
          Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à
          r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im
          Folgenden: „PayPal“), unter Geltung der PayPal-Nutzungsbedingungen,
          einsehbar unter{" "}
          <a href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full">
            https://www.paypal.com/de/webapps/mpp/ua/useragreement-full
          </a>
          oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter
          Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar
          unter{" "}
          <a href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full">
            https://www.paypal.com/de/webapps/mpp/ua/privacywax-full
          </a>
          . Wählt der Kunde im Rahmen des Online-Bestellvorgangs „PayPal
          Express“ als Zahlungsart aus, erteilt er durch Klicken des den
          Bestellvorgang abschließenden Buttons zugleich auch einen
          Zahlungsauftrag an PayPal. Für diesen Fall erklärt der Verkäufer schon
          jetzt die Annahme des Angebots des Kunden in dem Zeitpunkt, in dem der
          Kunde durch Klicken des den Bestellvorgang abschließenden Buttons den
          Zahlungsvorgang auslöst.
        </div>
        <br />
        <div>
          2.5 Bei der Abgabe eines Angebots über das Online-Bestellformular des
          Verkäufers wird der Vertragstext vom Verkäufer gespeichert und dem
          Kunden nach Absendung seiner Bestellung nebst den vorliegenden AGB in
          Textform (z. B. E-Mail, Fax oder Brief) zugeschickt. Zusätzlich wird
          der Vertragstext auf der Internetseite des Verkäufers archiviert und
          kann vom Kunden über sein passwortgeschütztes Kundenkonto unter Angabe
          der entsprechenden Login-Daten kostenlos abgerufen werden, sofern der
          Kunde vor Absendung seiner Bestellung ein Kundenkonto im Online-Shop
          des Verkäufers angelegt hat.
        </div>
        <br />
        <div>
          2.6 Vor verbindlicher Abgabe der Bestellung über das
          Online-Bestellformular des Verkäufers kann der Kunde mögliche
          Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm
          dargestellten Informationen erkennen. Ein wirksames technisches Mittel
          zur besseren Erkennung von Eingabefehlern kann dabei die
          Vergrößerungsfunktion des Browsers sein, mit deren Hilfe die
          Darstellung auf dem Bildschirm vergrößert wird. Seine Eingaben kann
          der Kunde im Rahmen des elektronischen Bestellprozesses so lange über
          die üblichen Tastatur- und Mausfunktionen korrigieren, bis er den den
          Bestellvorgang abschließenden Button anklickt.
        </div>
        <br />
        <div>
          2.7 Für den Vertragsschluss steht ausschließlich die deutsche Sprache
          zur Verfügung.
        </div>
        <br />
        <div>
          2.8 Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per
          E-Mail und automatisierter Bestellabwicklung statt. Der Kunde hat
          sicherzustellen, dass die von ihm zur Bestellabwicklung angegebene
          E-Mail-Adresse zutreffend ist, so dass unter dieser Adresse die vom
          Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat
          der Kunde bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle
          vom Verkäufer oder von diesem mit der Bestellabwicklung beauftragten
          Dritten versandten E-Mails zugestellt werden können.
        </div>
        <br />
        <H4>3) Widerrufsrecht</H4>
        <br />
        <div>3.1 Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.</div>
        <br />
        <br />
        <div>
          3.2 Nähere Informationen zum Widerrufsrecht ergeben sich aus der
          Widerrufsbelehrung des Verkäufers.
        </div>
        <br />
        <H4>4) Preise und Zahlungsbedingungen</H4>
        <br />
        <div>
          4.1 Sofern sich aus der Produktbeschreibung des Verkäufers nichts
          anderes ergibt, handelt es sich bei den angegebenen Preisen um
          Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten.
          Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden
          in der jeweiligen Produktbeschreibung gesondert angegeben.
        </div>
        <br />
        <div>
          4.2 Bei Lieferungen in Länder außerhalb der Europäischen Union können
          im Einzelfall weitere Kosten anfallen, die der Verkäufer nicht zu
          vertreten hat und die vom Kunden zu tragen sind. Hierzu zählen
          beispielsweise Kosten für die Geldübermittlung durch Kreditinstitute
          (z.B. Überweisungsgebühren, Wechselkursgebühren) oder
          einfuhrrechtliche Abgaben bzw. Steuern (z.B. Zölle). Solche Kosten
          können in Bezug auf die Geldübermittlung auch dann anfallen, wenn die
          Lieferung nicht in ein Land außerhalb der Europäischen Union erfolgt,
          der Kunde die Zahlung aber von einem Land außerhalb der Europäischen
          Union aus vornimmt.
        </div>
        <br />
        <div>
          4.3 Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Online-Shop
          des Verkäufers mitgeteilt.
        </div>
        <br />
        <div>
          4.4 Ist Vorauskasse per Banküberweisung vereinbart, ist die Zahlung
          sofort nach Vertragsabschluss fällig, sofern die Parteien keinen
          späteren Fälligkeitstermin vereinbart haben.
        </div>
        <br />
        <div>
          4.5 Bei Zahlung mittels einer von PayPal angebotenen Zahlungsart
          erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister PayPal
          (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
          Luxembourg (im Folgenden: &quot;PayPal&quot;), unter Geltung der
          PayPal-Nutzungsbedingungen, einsehbar unter{" "}
          <a href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full">
            https://www.paypal.com/de/webapps/mpp/ua/useragreement-full
          </a>
          oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter
          Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar
          unter{" "}
          <a href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full">
            https://www.paypal.com/de/webapps/mpp/ua/privacywax-full
          </a>
          .
        </div>
        <br />
        <H4>5) Liefer und Versandbedingungen</H4>
        <br />
        <div>
          5.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die vom
          Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart
          ist. Bei der Abwicklung der Transaktion ist die in der
          Bestellabwicklung des Verkäufers angegebene Lieferanschrift
          maßgeblich.
        </div>
        <br />
        <div>
          5.2 Sendet das Transportunternehmen die versandte Ware an den
          Verkäufer zurück, da eine Zustellung beim Kunden nicht möglich war,
          trägt der Kunde die Kosten für den erfolglosen Versand. Dies gilt
          nicht, wenn der Kunde den Umstand, der zur Unmöglichkeit der
          Zustellung geführt hat, nicht zu vertreten hat oder wenn er
          vorübergehend an der Annahme der angebotenen Leistung verhindert war,
          es sei denn, dass der Verkäufer ihm die Leistung eine angemessene Zeit
          vorher angekündigt hatte. Ferner gilt dies im Hinblick auf die Kosten
          für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht wirksam
          ausübt. Für die Rücksendekosten gilt bei wirksamer Ausübung des
          Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des
          Verkäufers hierzu getroffene Regelung.
        </div>
        <br />
        <div>
          5.3 Selbstabholung ist aus logistischen Gründen nicht möglich.
        </div>
        <br />
        <div>
          5.4 Digitale Inhalte werden dem Kunden ausschließlich in
          elektronischer Form wie folgt überlassen:
        </div>
        <br />
        <Ul>
          <li>per Download</li>
          <li>per E-Mail</li>
        </Ul>
        <br />
        <H4>7) Einräumung von Nutzungsrechnten für digitale Inhalte</H4>
        <br />
        <div>
          6.1 Sofern sich aus der Inhaltsbeschreibung im Online-Shop des
          Verkäufers nichts anderes ergibt, räumt der Verkäufer dem Kunden an
          den überlassenen Inhalten das nicht ausschließliche, örtlich und
          zeitlich unbeschränkte Recht ein, die überlassenen Inhalte zu privaten
          sowie zu geschäftlichen Zwecken zu nutzen.
        </div>
        <br />
        <div>
          6.2 Eine Weitergabe der Inhalte an Dritte oder die Erstellung von
          Kopien für Dritte außerhalb des Rahmens dieser AGB ist nicht
          gestattet, soweit nicht der Verkäufer einer Übertragung der
          vertragsgegenständlichen Lizenz an den Dritten zugestimmt hat.
        </div>
        <br />
        <div>
          6.3 Die Rechtseinräumung wird erst wirksam, wenn der Kunde die
          vertraglich geschuldete Vergütung vollständig geleistet hat. Der
          Verkäufer kann eine Benutzung der vertragsgegenständlichen Inhalte
          auch schon vor diesem Zeitpunkt vorläufig erlauben. Ein Übergang der
          Rechte findet durch eine solche vorläufige Erlaubnis nicht statt.
        </div>
        <br />
        <H4>7) Eigentumsvorbehalt</H4>
        <br />
        <div>
          Tritt der Verkäufer in Vorleistung, behält er sich bis zur
          vollständigen Bezahlung des geschuldeten Kaufpreises das Eigentum an
          der gelieferten Ware vor.
        </div>
        <br />
        <H4>8) Mängelhaftung (Gefährleistung)</H4>
        <br />
        <div>
          8.1 Ist die Kaufsache mangelhaft, gelten die Vorschriften der
          gesetzlichen Mängelhaftung.
        </div>
        <br />
        <div>
          8.2 Der Kunde wird gebeten, angelieferte Waren mit offensichtlichen
          Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer
          hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht nach, hat
          dies keinerlei Auswirkungen auf seine gesetzlichen oder vertraglichen
          Mängelansprüche.
        </div>
        <br />
        <H4>9) Anwendbares Recht</H4>
        <br />
        <div>
          Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der
          Bundesrepublik Deutschland unter Ausschluss der Gesetze über den
          internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese
          Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende
          Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen
          gewöhnlichen Aufenthalt hat, entzogen wird.
        </div>
        <br />
        <H4>Alternative Streitbelegung</H4>
        <br />
        <div>
          10.1 Die EU-Kommission stellt im Internet unter folgendem Link eine
          Plattform zur Online-Streitbeilegung bereit:
          <a href="https://ec.europa.eu/consumers/odr">
            https://ec.europa.eu/consumers/odr
          </a>
        </div>
        <br />
        <div>
          Diese Plattform dient als Anlaufstelle zur außergerichtlichen
          Beilegung von Streitigkeiten aus Online-Kauf- oder
          Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.
        </div>
        <br />
        <div>
          10.2 Der Verkäufer ist zur Teilnahme an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          weder verpflichtet noch bereit.
        </div>
      </Body>
    </>
  );
};
