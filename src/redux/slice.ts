import { createSlice } from "@reduxjs/toolkit";
export interface ICourse {
  courseId: string;
  description: string;
  genre: string;
  grade: string;
  price: number;
  priceBonus: number;
  shopUrl: string;
  status: string;
  subject: string;
  title: string;
}
export enum priceBonusEnum {
  "price" = "Рубли",
  "bonus" = "Бонус",
}
interface IState {
  isLoading: boolean;
  isError: boolean;
  priceBonus: priceBonusEnum;
  subject: string;
  grade: string;
  genre: string;
  searchText: string;
  data: {
    items: ICourse[];
    result: string;
    errorMessage: string | null;
  };
}
const initialState: IState = {
  isLoading: false,
  isError: false,
  priceBonus: priceBonusEnum.price,
  subject: "",
  grade: "",
  genre: "",
  searchText: "",
  data: {
    items: [],
    result: "",
    errorMessage: null,
  },
};

const toolkitSlice = createSlice({
  name: "showcase",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    startLoading(state) {
      state.isError = false;
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    errorLoading(state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = true;
    },
    setPriceBonus(state, action) {
      state.priceBonus = action.payload;
    },
    setSubject(state, action) {
      state.subject = action.payload;
    },
    setGrade(state, action) {
      state.grade = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const storeState = ({ showcase }: { showcase: IState }) => showcase;
export const priceBonus = ({ showcase }: { showcase: IState }) =>
  showcase.priceBonus;
export default toolkitSlice.reducer;
export const {
  setData,
  startLoading,
  endLoading,
  errorLoading,
  setPriceBonus,
  setSubject,
  setGrade,
  setGenre,
  setSearchText,
} = toolkitSlice.actions;
