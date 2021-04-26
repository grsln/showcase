import { useSelector } from "react-redux";
import { priceBonus, priceBonusEnum } from "../../redux/slice";
import s from "./style.module.css";

interface ICourseCard {
  id: string;
  title: string;
  subject: string;
  grade: string;
  genre: string;
  price: number;
  bonus: number;
  shopUrl: string;
}

const CourseCard = (course: ICourseCard) => {
  const { id, title, subject, grade, genre, price, bonus, shopUrl } = course;
  const isPrice = useSelector(priceBonus) === priceBonusEnum.price;
  const formatGrades = (grades: string) => {
    const arrGrades = grades.split(";");
    let countGrades = arrGrades.length;
    if (countGrades > 1) {
      return `${arrGrades[0]}-${arrGrades[countGrades - 1]} классы`;
    } else if (countGrades === 1) return `${arrGrades[0]} класс`;
  };
  return (
    <div className={s.card}>
      <div className={s.imageWrap}>
        <img
          src={`https://www.imumk.ru/svc/coursecover/${id}`}
          alt={subject}
          title={title}
        />
      </div>
      <div className={s.info}>
        <p className={`${s.infoText} ${s.infoTitle}`}>{subject}</p>
        <p className={`${s.infoText} ${s.infoGrade}`}>{formatGrades(grade)}</p>
        <p className={`${s.infoText} ${s.infoGenre}`}>{genre}</p>
        <p className={`${s.infoText} ${s.infoDetail}`}>
          <a href={shopUrl}>Подробнее</a>
        </p>
        <p className={`${s.infoText} ${s.infoTest}`}>
          <a href={shopUrl}>
            {isPrice ? `Цена:${price}р.` : `Цена(в бонусах):${bonus}`}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
