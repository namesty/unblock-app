import { useUserStore } from "@/stores/userStore";
import { Magic } from "magic-sdk";
import { useCallback } from "react";

const useMagic = () => {
  const { setMagicDIDToken, setMagicUserMetadata, reset } = useUserStore();

  const connect = useCallback(async () => {
    const magic = new Magic("pk_live_EC1F2F82BB2875FD", {
      network: "mainnet",
    });

    await magic.wallet
      .connectWithUI()
      .on("id-token-created", async ({ idToken }) => {
        console.log("idToken", idToken);
        setMagicDIDToken(idToken);
      });

    const metadata = await magic.user.getMetadata();
    setMagicUserMetadata(metadata);
  }, [setMagicDIDToken, setMagicUserMetadata]);

  const disconnect = useCallback(async () => {
    const magic = new Magic("pk_live_EC1F2F82BB2875FD", {
      network: "mainnet",
    });

    await magic.wallet.disconnect();
    reset();
  }, [reset]);

  return { connect, disconnect };
};

export default useMagic;
