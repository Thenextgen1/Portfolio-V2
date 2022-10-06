import { useState, useCallback, useEffect } from "react";

const useDesktop = () => {
  const [desktop, setDesktop] = useState(1024);

  const handleWindowResize = useCallback(() => {
    setDesktop(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return desktop;
};

export default useDesktop;
