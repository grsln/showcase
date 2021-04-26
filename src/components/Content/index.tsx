import React from "react";
import Container from "../Container";
import Header from "../Header";
import s from "./style.module.scss";

const Content = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Container />
    </div>
  );
};

export default Content;
