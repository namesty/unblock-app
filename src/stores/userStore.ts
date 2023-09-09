import { v4 as uuid } from "uuid";
import { Magic, MagicUserMetadata } from "magic-sdk";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface UserState {
  xUserId: string;
  magicDIDToken: string | null;
  setMagicDIDToken: (token: string) => void;
  magicUserMetadata: MagicUserMetadata | null;
  setMagicUserMetadata: (metadata: MagicUserMetadata) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        xUserId: uuid(),
        magicDIDToken: null,
        setMagicDIDToken: (token) => set((state) => ({ magicDIDToken: token })),
        magicUserMetadata: null,
        setMagicUserMetadata: (metadata) =>
          set((state) => ({ magicUserMetadata: metadata })),
        reset: () => {
          set((state) => ({
            authToken: null,
            magicDIDToken: null,
            magicUserMetadata: null,
          }));
        },
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
