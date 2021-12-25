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

  return (
    <>
      <Body>
        <H2>Widerrufsbelehrung & Widerrufsformular</H2>
        <br />
        <div>
          Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei
          Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu
          Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
          ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:
        </div>
        <br />
        <h3>A. Widerrufsbelehrung</h3>
        <br />
        <H4>Widerrufsrecht</H4>
        <br />
        <div>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen.
        </div>
        <br />
        <div>
          Bei Verträgen zur Lieferung von Waren beträgt die Widerrufsfrist
          vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter
          Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz
          genommen haben bzw. hat.
        </div>
        <br />
        <div>
          Bei Verträgen zur Lieferung von nicht auf einem körperlichen
          Datenträger befindlichen Daten, die in digitaler Form hergestellt und
          bereitgestellt werden (digitale Inhalte) beträgt die Widerrufsfrist
          vierzehn Tage ab dem Tag des Vertragsabschlusses.
        </div>
        <br />
        <div>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (David Petri,
          fernvonfremd, Hans-Thoma-Straße 47, 69121 Heidelberg, Deutschland,
          Tel.:
          <a href="tel:+49 173 7777637">+49 173 7777637</a>, E-Mail:{" "}
          <a href="mailto:david@frenvonfremd.de">david@fernvonfremd.de</a>){" "}
          mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter
          Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu
          widerrufen, informieren. Sie können dafür das beigefügte
          Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben
          ist.
        </div>
        <br />
        <div>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
          absenden.
        </div>
        <br />
        <H4>Folgen des Widerrufs</H4>
        <br />
        <div>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
          die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
          Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie
          eine andere Art der Lieferung als die von uns angebotene, günstigste
          Standardlieferung gewählt haben), unverzüglich und spätestens binnen
          vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
          Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
          Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
          ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
          wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
          Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </div>
        <br />
        <div>
          Bei Verträgen zur Lieferung von Waren können wir die Rückzahlung
          verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie
          den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben,
          je nachdem, welches der frühere Zeitpunkt ist.
        </div>
        <br />
        <div>
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
          vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
          Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
          Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
          vierzehn Tagen absenden.
        </div>
        <br />
        <div>
          Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
        </div>
        <br />
        <div>
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen,
          wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
          Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
          mit ihnen zurückzuführen ist.
        </div>
        <br />
        <H4>Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</H4>
        <br />
        <div>
          Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von
          Waren, die nicht vorgefertigt sind und für deren Herstellung eine
          individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich
          ist oder die eindeutig auf die persönlichen Bedürfnisse des
          Verbrauchers zugeschnitten sind.
        </div>
        <br />
        <div>
          Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Lieferung von
          digitalen Inhalten, wenn wir mit der Ausführung des Vertrages begonnen
          haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir mit der
          Ausführung des Vertrages vor Ablauf der Widerrufsfrist beginnen und
          Sie uns Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre
          Zustimmung mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht
          verlieren.
        </div>
        <br />
        <H4>Allgemeine Hinweise zur Rücksendung von Waren</H4>
        <br />
        <div>
          1) Bitte vermeiden Sie Beschädigungen und Verunreinigungen der Ware.
          Senden Sie die Ware bitte in Originalverpackung mit sämtlichem Zubehör
          und mit allen Verpackungsbestandteilen an uns zurück. Verwenden Sie
          ggf. eine schützende Umverpackung. Wenn Sie die Originalverpackung
          nicht mehr besitzen, sorgen Sie bitte mit einer geeigneten Verpackung
          für einen ausreichenden Schutz vor Transportschäden.
        </div>
        <br />
        <div>2) Senden Sie die Ware bitte nicht unfrei an uns zurück.</div>
        <br />
        <div>
          3) Bitte beachten Sie, dass die vorgenannten Ziffern 1-2 nicht
          Voraussetzung für die wirksame Ausübung des Widerrufsrechts sind.
        </div>
        <br />
        <h3>Widerrufsformular</h3>
        <br />
        <div>
          Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses
          Formular aus und senden es zurück.
        </div>
        <br />
        <div>An:</div>
        <br />
        <div>
          David Petri <br />
          fernvonfremd <br />
          Hans-Thoma-Straße 47 <br />
          69121 Heidelberg <br />
          Deutschland <br />
        </div>
        <br />
        <div>
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
          Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der
          folgenden Dienstleistung (*)
        </div>
        <br />
      </Body>
    </>
  );
};
