import React from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt";
import styled from "./styles.module.scss";

export default function Header() {
  const currenDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className={styled.headerContainer}>
      <img src="assets/logo.svg" alt="Podcastr" />

      <p>O melhor para voce ouvir sempre</p>
      <span>{currenDate}</span>
    </header>
  );
}
