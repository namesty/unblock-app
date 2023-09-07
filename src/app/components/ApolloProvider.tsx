"use client";
import { apolloClient } from "../../apollo";
import { ApolloProvider as Provider } from "@apollo/client";

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider client={apolloClient}>{children}</Provider>;
}
