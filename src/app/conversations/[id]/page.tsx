"use client";

import { useParams } from "next/navigation";

const Conversation = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Conversation</h1>
    </div>
  );
};

export default Conversation;
