import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalConfirmationType = {
  show: boolean;
  title: string;
  label: string;
  code?: string;
}
export interface State {
  errorPage: null | number;
  modalCounter: string[];
  authenticated?: object;
  modalConfirmation: ModalConfirmationType;
  isModalConfirmed: boolean;
}

const initialState: State = {
  errorPage: null,
  modalCounter: [],
  authenticated: undefined,
  modalConfirmation: {
    show: false,
    title: "",
    label: "",
  },
  isModalConfirmed: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAuthenticated: (state: State, action: PayloadAction<object>) => {
      state.authenticated = action.payload;
    },
    setErrorPage: (state: State, action: PayloadAction<number>) => {
      state.errorPage = action.payload;
    },
    resetErrorPage: (state: State) => {
      state.errorPage = null;
    },
    setModalConfirmation: (state: State, action: PayloadAction<ModalConfirmationType>) => {
      state.modalConfirmation = action.payload;
    },
    confirmModal: (state: State) => {
      state.isModalConfirmed = true;
    },
    resetModalConfirmation: (state: State) => {
      state.modalConfirmation = {
        show: false,
        title: "",
        label: "",
      };
      state.isModalConfirmed = false;
    },
  },
});

export const {
  setAuthenticated,
  setErrorPage,
  setModalConfirmation,
  confirmModal,
  resetModalConfirmation,
  resetErrorPage,
} = globalSlice.actions;

export default globalSlice.reducer;
