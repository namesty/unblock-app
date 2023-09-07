import { useUserStore } from "@/stores/userStore";
import { Magic } from "magic-sdk";
import { useCallback } from "react";

const useMagicLogin = () => {
  const { setMagicDIDToken, setMagicUserMetadata } = useUserStore();

  return useCallback(async () => {
    const magic = new Magic("pk_live_EC1F2F82BB2875FD", {
      network: "mainnet",
    });

    await magic.wallet
      .connectWithUI()
      .on("id-token-created", async ({ idToken }) => {
        setMagicDIDToken(idToken);
      });

    const metadata = await magic.user.getMetadata();
    setMagicUserMetadata(metadata);
  }, [setMagicDIDToken, setMagicUserMetadata]);
};

export default useMagicLogin;
