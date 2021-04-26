import React from "react";
import s from "./style.module.scss";

const Footer = () => {
  return (
    <div className={s.main}>
      <div className={s.footer}>
        <div className={s.legal}>
          <p>
            © <a href="http://physiconlab.ru">ООО «Физикон Лаб»</a>, 2013—2021
          </p>
          <p>
            <a rel="nofollow" href="https://www.imumk.ru/privacy">
              Пользовательское соглашение
            </a>
          </p>
        </div>
        <ul className={s.social}>
          <li className={s.socialItem}>
            <a
              href="https://twitter.com/oblako_znanij"
              className={`${s.socialLink} ${s.twitter}`}
            >
              Twitter
            </a>
          </li>
          <li className={s.socialItem}>
            <a
              href="http://vk.com/oblako_znanij"
              className={`${s.socialLink} ${s.vkontakte}`}
            >
              Vkontakte
            </a>
          </li>
          <li className={s.socialItem}>
            <a
              href="https://www.facebook.com/oblakoznanij/?ref=oblako"
              className={`${s.socialLink} ${s.facebook}`}
            >
              Facebook
            </a>
          </li>
          <li className={s.socialItem}>
            <a
              href="https://www.instagram.com/oblako_znanij/"
              className={`${s.socialLink} ${s.instagram}`}
            >
              Instagram
            </a>
          </li>
        </ul>
        <div className={s.legal}>
          <p>
            <a href="tel:+74987446757">+7 (499) 322-07-57</a>,{" "}
            <a href="mailto:info@imumk.ru">info@imumk.ru</a>
          </p>
          <p>
            <a rel="nofollow" href="https://www.imumk.ru/regulations">
              Правила пользования сайтом
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
