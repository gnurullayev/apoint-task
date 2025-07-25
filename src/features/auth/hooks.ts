import { API } from "@/services/api";
import { dispatch } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";

export const useLogin = () =>
  useMutation({
    mutationFn: async (data: any) => API.login(data),
    onSuccess: (response) => {
      dispatch.auth.login(response.token.token);
      dispatch.userData.userData({ user: response.username });
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        message.error(error?.response?.data?.message);
      } else {
        message.error(error?.message);
      }
    },
  });
