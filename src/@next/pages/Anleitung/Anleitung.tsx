import React from "react"
import styled from "styled-components"
import { IProps } from "./types"

export const Anleitung: React.FC<IProps> = ({}: IProps) => {
    return (
        <>

        <Body>
            <h1>HALLO FREMDER</h1> 
            <h2>WIE MAN SPIELT</h2>
            {/* <ReactMarkdown children={'# HALLO FREMDER'} />
            <ReactMarkdown children={'### ( WIE MAN SPIELT )'} />
            <ReactMarkdown children={'**Kennst du wirklich deinen besten Freund? Wie gut kennst du deine Mutter oder deine Schwester, oder sonst jemanden dem du nahestehst?**'} />
            <ReactMarkdown children={'**fernvonfremd ist ein Zweckgetriebenes Kartenspiel. 3 sorgfältig gestaltete Level, mit denen du deine Beziehungen vertiefen und neue schaffen kannst.**'} />
            <ReactMarkdown children={'**Bereit?**'} />
            <ReactMarkdown children={'**_So spielt man_**\\\n(Regeln für 2 Spieler)\\\nUm zu beginnen, besorgt euch jeder einen Stift und Papier. Legt die Finale Karte für das Ende des Spiels beiseite. Setzt euch gegenüber voneinander hin, mit den Level 1 Karten verdeckt zwischen euch. Nun, starrt euch tief in die Augen – im Ernst, starrt euch in die Augen. Der erste, der blinzelt, zieht zuerst.\n' +
            'Spieler A zieht eine Karte, Spieler B antwortet. Wechselt euch ab, bis mindestens 15 Karten für jedes Level gespielt wurden. Sobald 15 Karten oder mehr pro Runde gespielt wurden, fühlt euch frei, in das nächste Level vorzustoßen. Stellt sicher, den Haufen verwendeter Karten getrennt beiseitezulegen, um Verwirrung zu vermeiden.\n' +
            'Es besteht jederzeit die Möglichkeit auch die Fragen zu beantworten, die du deinem Partner stellst und vice versa.\n'} /> */}
            {/*<ReactMarkdown children={} /> */}

        </Body>
      </>
    )
}


const Body = styled.div`
  background: linear-gradient(180deg, #F25D62 0%, #ED1C24 50%, #C10016 100%);
  position: relative; 
  padding-top: 60px;
  padding-left: 15%;
  padding-right: 15%;
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  
  color: #FFF;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #f20000;
  background-color: #FCFCFC;
  height: 60px;
  font-size: 10px;
  width: 100%;
  text-align: center;
`