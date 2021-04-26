import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenre,
  setGrade,
  setSearchText,
  setSubject,
  storeState,
} from "../../redux/slice";
import CourseList from "../CourseList";
import Select from "../Select";
import { GENRES, GRADES, SUBJECTS } from "./constSelect";
import s from "./style.module.scss";

const Container = () => {
  const state = useSelector(storeState);
  const dispatch = useDispatch();
  const handleChangeSubj = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(setSubject(e.target.value));
  const handleChangeGenre = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(setGenre(e.target.value));
  const handleChangeGrade = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(setGrade(e.target.value));
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchText(e.target.value));
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={s.main}>
      <h1 className={s.title}>Витрина</h1>
      <Form className={s.courses} onSubmit={handleSubmit}>
        <Select id="subj" items={SUBJECTS} onChange={handleChangeSubj} />
        <Select id="genre" items={GENRES} onChange={handleChangeGenre} />
        <Select id="grade" items={GRADES} onChange={handleChangeGrade} />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Поиск"
          value={state.searchText}
        />
      </Form>
      <CourseList />
    </div>
  );
};

export default Container;
