import type { NavigateFunction } from "react-router-dom";

const navigateTo = (navigate: NavigateFunction, path: string) => {
  navigate(path);
};

export default navigateTo;
