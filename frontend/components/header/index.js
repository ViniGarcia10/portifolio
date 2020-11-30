import React from "react";
import {
  Header,
  LogoBar,
  ContainOption,
  ContainPhone,
  ContainOptionText,
  ContainPhoneNumber,
  ContainPhoneLogo,
} from "./styles";

export default function index() {
  function scroll1() {
    window.scrollBy(0, 560);
  }

  return (
    <>
      <Header>
        <LogoBar src="/logo.png" alt="Vercel Logo" />

        <ContainOption>
          <ContainOptionText>Início</ContainOptionText>
        </ContainOption>

        <ContainOption onClick={scroll1}>
          <ContainOptionText>Quem sou</ContainOptionText>
        </ContainOption>

        <ContainPhone>
          <ContainPhoneLogo src="/phone.png" />
          <ContainPhoneNumber>69 98473-1151</ContainPhoneNumber>
        </ContainPhone>
      </Header>
    </>
  );
}
