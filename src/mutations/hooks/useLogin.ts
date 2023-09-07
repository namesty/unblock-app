import { useMutation } from "@apollo/client";
import LOGIN from "../mutations/LOGIN";

const useLogin = () => {
  return useMutation<string>(LOGIN, {
    onCompleted: (authToken) => {},
  });
};

export default useLogin;
