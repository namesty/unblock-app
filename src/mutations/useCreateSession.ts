import { useMutation } from "@tanstack/react-query";

export default function useCreateSession() {
  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: async () => {
      console.log("hey");
    },
  });
}
