import React from "react";
import styled from "styled-components";

import { fvf3, smallScreen } from "@styles/constants";
import { useWindowDimensions } from "@hooks";
import { IProps } from "./types";

export const Urheberrecht: React.FC<IProps> = ({}: IProps) => {
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

  return (
    <Body>
      <H2>Urheberrecht</H2>
      <br />
      <div>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </div>
    </Body>
  );
};
