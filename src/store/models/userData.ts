import { createModel } from "@rematch/core";
import type { RootModel } from ".";

interface UserDataState {
  user: any;
}

const initialState: UserDataState = {
  user: null,
};

export const userData = createModel<RootModel>()({
  state: initialState,
  reducers: {
    userData(state, payload: UserDataState) {
      return { ...state, user: payload };
    },
  },
});
