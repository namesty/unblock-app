import { API_URL } from "@/constants";
import useHttp from "@/hooks/useHttp";
import { useMutation } from "@tanstack/react-query";

export default function useCreateConversation() {
  const { post } = useHttp();

  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: async (args: { prompt: string }) => {
      const response = await post(`${API_URL}/conversations`, {
        prompt: args.prompt,
      });
      console.log("response", response);
      return response;
    },
  });
}
