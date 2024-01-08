import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Cosmic Glow Shop`
  }, [title]);

  return null;
}
