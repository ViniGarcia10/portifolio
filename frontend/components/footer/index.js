import React from "react";
import { Logo, Footer } from "./styles";

export default function index() {
  return (
    <>
      <Footer>
        Powered by <Logo src="/logo.png" alt="Vercel Logo" />
      </Footer>
    </>
  );
}
