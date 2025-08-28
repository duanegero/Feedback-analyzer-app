import { useEffect } from "react";

import HomeCard from "../components/home page/Home-card";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <HomeCard />;
    </>
  );
}
