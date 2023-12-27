import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QuestionViewState = {
  id: string;
  page: string;
  filter: "newest" | "top";
  search: string;
  perPage: string;
};

const initialState: QuestionViewState = {
  id: "",
  page: "1",
  filter: "newest",
  search: "",
  perPage: ""
};

const questionViewSlice = createSlice({
  name: "questionView",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setFilter: (state, action: PayloadAction<"newest" | "top">) => {
      state.filter = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPerPage: (state, action: PayloadAction<string>) => {
      state.perPage = action.payload;
    }
  }
});

export const { setId, setPage, setFilter, setSearch, setPerPage } =
  questionViewSlice.actions;

export const getQuestionViewId = (state: { questionView: QuestionViewState }) =>
  state.questionView.id;
export const getQuestionViewPage = (state: {
  questionView: QuestionViewState;
}) => state.questionView.page;
export const getQuestionViewFilter = (state: {
  questionView: QuestionViewState;
}) => state.questionView.filter;
export const getQuestionViewSearch = (state: {
  questionView: QuestionViewState;
}) => state.questionView.search;
export const getQuestionViewPerPage = (state: {
  questionView: QuestionViewState;
}) => state.questionView.perPage;

export default questionViewSlice.reducer;
