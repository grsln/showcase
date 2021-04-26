import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Logo from "./assets/logo.svg";
import s from "./style.module.scss";
const Header = () => {
  const handleToggleClick = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.target as HTMLSpanElement;
    const body = document.querySelector("body");
    if (body && el) {
      body.style.overflow = el.parentElement?.classList.contains("collapsed")
        ? "hidden"
        : "";
    }
  };
  return (
    <div className={s.main}>
      <Navbar className={s.navbar} collapseOnSelect expand="xl">
        <Navbar.Brand className={s.logoWrap} href="https://www.imumk.ru/">
          <img
            src={Logo}
            className={`d-inline-block align-top ${s.logo}`}
            alt="Облако знаний"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`fixed-top ${s.burger}`}
          onClick={handleToggleClick}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className={s.menu}>
          <Nav className="mr-auto">
            <Nav.Link href="https://www.imumk.ru/pages/about">
              О проекте
            </Nav.Link>
            <Nav.Link href="https://www.imumk.ru/news">Новости</Nav.Link>
            <Nav.Link href="https://www.imumk.ru/feedback">Помощь</Nav.Link>
            <Nav.Link href="https://www.imumk.ru/pages/apps">Скачать</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className={s.buttonsWrap}>
          <Button href="https://www.imumk.ru/showcase">Каталог</Button>
          <Button href="https://school.imumk.ru/regpin.html">Активация</Button>
          <Button href="https://school.imumk.ru/">Вход</Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
