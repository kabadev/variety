import { useState } from "react";
export const useToggle = (initialVal = false) => {
  const [toggle, setToggle] = useState(initialVal);
  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, toggleHandle];
};

export default useToggle;
