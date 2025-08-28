import { useEffect } from "react";

import FeedbackForm from "../components/feedback page/Feedback-form";

export default function Feedback() {
  useEffect(() => {
    document.title = "Feedback";
  });

  return (
    <>
      <FeedbackForm />
    </>
  );
}
