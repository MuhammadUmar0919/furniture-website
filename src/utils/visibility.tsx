import { useEffect, useState } from "react";

// Define the type for the useScrollVisibility hook
type UseScrollVisibility = (threshold?: number) => {
  isVisible: boolean;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
};

const useScrollVisibility: UseScrollVisibility = (threshold = 100) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY;
      setVisible(
        currentScrollPos > threshold || prevScrollPos < currentScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, threshold]);

  return {
    isVisible: visible,
    setScroll: setPrevScrollPos,
  };
};

export default useScrollVisibility;
