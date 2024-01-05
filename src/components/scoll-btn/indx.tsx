import { IconButton } from "@/common"
import React from "react"
import useScrollVisibility from "@/utils/visibility"

function ScrollBtn() {
    const { isVisible, setScroll } = useScrollVisibility();
  
    const scrollToTop = () => {
      setScroll(0);
    };
  
    return (
      <IconButton
        placeholder
        variant="outlined"
        className={`absolute right-[20px] bottom-[50px] rounded-full ${
          isVisible ? "" : ""
        }`}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" />
        </svg>
      </IconButton>
    );
  }
  
  export default ScrollBtn;
