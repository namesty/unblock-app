"use client";

import useMagicLogin from "@/hooks/useMagicLogin";
import useCreateConversation from "@/mutations/useCreateConversation";
import { useState } from "react";

export default function Home() {
  const { connect } = useMagicLogin();
  const { mutate, data, isLoading, error } = useCreateConversation();
  const [inputValue, setinputValue] = useState<string>("");

  const onPressEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    mutate({ prompt: inputValue });
  };

  console.log({ data, isLoading, error });

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-14 p-4 flex justify-between items-center border-b-2">
        <h1>Unblock</h1>
        <button
          type="button"
          onClick={() => {
            connect();
          }}
        >
          Login
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-10 w-full p-24 justify-center items-center">
        <h1 className="text-6xl font-bold text-center">What's blocking you</h1>
        <div className="relative w-[720px]">
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              onClick={() => connect()}
              type="submit"
              className="p-2 min-w-10 h-10 border-2 rounded-md"
            >
              Go
            </button>
          </span>
          <input
            className="bg-blue border h-16 rounded-md w-full p-3 pr-[72px]"
            onKeyDown={onPressEnter}
            onChange={(e) => setinputValue(e.target.value)}
            value={inputValue}
          />
        </div>
      </div>
    </main>
  );
}
