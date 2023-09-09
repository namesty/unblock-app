import { useUserStore } from "@/stores/userStore";

const useHttp = () => {
  const { magicDIDToken, xUserId } = useUserStore();

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (magicDIDToken) {
    headers.append("Authorization", `Bearer ${magicDIDToken}`);
  }

  headers.append("x-user-id", xUserId);

  const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })

    if (!response.ok) throw new Error(response.statusText)

    const data = await response.json()
    return data
  }

  const post = async <T>(url: string, body?: any): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: body? JSON.stringify(body) : undefined,
    })

    if (!response.ok) throw new Error(response.statusText)

    const data = await response.json()
    return data
  }

  return { get, post }
}

export default useHttp