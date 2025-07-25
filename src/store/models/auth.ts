import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import type { AuthState } from "../../types/auth";

const initialState: AuthState = {
  isLogged: false,
  token: "",
};

export const auth = createModel<RootModel>()({
  state: initialState,
  reducers: {
    login(state, payload: string) {
      return { ...state, token: payload, isLogged: true };
    },
  },

  effects: (dispatch) => ({
    async logoutAsync() {
      dispatch({ type: "RESET_APP" });
      localStorage.removeItem("token");
    },
  }),
});
