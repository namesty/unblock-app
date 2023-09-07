import { Magic, MagicUserMetadata } from "magic-sdk";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface UserState {
  authToken: string | null;
  setAuthToken: (token: string) => void;
  magicDIDToken: string | null;
  setMagicDIDToken: (token: string) => void;
  magicUserMetadata: MagicUserMetadata | null;
  setMagicUserMetadata: (metadata: MagicUserMetadata) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        authToken: null,
        setAuthToken: (token) => set((state) => ({ magicDIDToken: token })),
        magicDIDToken: null,
        setMagicDIDToken: (token) => set((state) => ({ magicDIDToken: token })),
        magicUserMetadata: null,
        setMagicUserMetadata: (metadata) =>
          set((state) => ({ magicUserMetadata: metadata })),
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
