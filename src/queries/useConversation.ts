import { API_URL } from "@/constants";
import useHttp from "@/hooks/useHttp";
import { useQuery } from "@tanstack/react-query";

export default function useCreateConversation(id: string) {
  const { get } = useHttp();

  return useQuery(["conversation", id], async () => {
    const response = await get(`${API_URL}/conversations/${id}`);
    console.log("response", response);
    return response;
  });
}
