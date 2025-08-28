import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <div>
      <h1 className="text-3xl">Hello World!</h1>
    </div>
  );
}
