import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  endLoading,
  errorLoading,
  ICourse,
  setData,
  setPriceBonus,
  startLoading,
  storeState,
} from "../../redux/slice";
import apiservice from "../../service/apiservice";
import CourseCard from "../CourseCard";
import s from "./style.module.css";
import { GENRES, GRADES, SUBJECTS } from "../Container/constSelect";
import Toggle from "../Toggle";
import { Spinner } from "react-bootstrap";

const CourseList = () => {
  const state = useSelector(storeState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoading());
    apiservice.request().then(
      (result) => {
        if ((result.result = "Ok")) {
          dispatch(setData(result));
          dispatch(endLoading());
        }
      },
      (error) => {
        dispatch(errorLoading(error));
      }
    );
  }, []);
  const handleChangeToogle = (select: string) =>
    dispatch(setPriceBonus(select));
  const filter = (course: ICourse) =>
    !(
      (state.subject !== SUBJECTS[0] &&
        state.subject !== "" &&
        state.subject !== course.subject) ||
      (state.grade !== GRADES[0] &&
        state.grade !== "" &&
        course.grade.split(";").indexOf(state.grade) === -1) ||
      (state.genre !== GENRES[0] &&
        state.genre !== "" &&
        course.genre !== state.genre) ||
      (state.searchText !== "" &&
        course.title.toUpperCase().indexOf(state.searchText.toUpperCase()) ===
          -1)
    );
  const isFilterChanged =
    (state.subject !== SUBJECTS[0] && state.subject !== "") ||
    (state.grade !== GRADES[0] && state.grade !== "") ||
    (state.genre !== GENRES[0] && state.genre !== "") ||
    state.searchText !== "";
  const filteredList: ICourse[] = state.data.items
    ? state.data.items.filter((item) => filter(item))
    : [];
  if (state.isLoading)
    return (
      <Spinner className={s.spinner} animation="border" variant="primary" />
    );
  if (state.isError) return <h1>{state.data.errorMessage}</h1>;
  return (
    <>
      <div className={s.toggle}>
        <Toggle
          firstState="Рубли"
          secondState="Бонусы"
          onChange={handleChangeToogle}
        />
      </div>
      {isFilterChanged && <h1 className={s.resultTitle}>Результаты поиска:</h1>}
      {filteredList.length === 0 && (
        <div className={s.empty}>Курсы не найдены</div>
      )}
      <div className={s.main}>
        {filteredList.length > 0 &&
          filteredList.map((item) => (
            <CourseCard
              key={item.courseId}
              id={item.courseId}
              title={item.title}
              subject={item.subject}
              grade={item.grade}
              genre={item.genre}
              price={item.price}
              bonus={item.priceBonus}
              shopUrl={item.shopUrl}
            />
          ))}
      </div>
    </>
  );
};

export default CourseList;
