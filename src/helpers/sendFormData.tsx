import api from "../utils/api";
import type { FormTypeParams } from "../components/types";

const sendFormData = async ({
  email,
  username,
  feedback,
  setEmail,
  setUsername,
  setFeedback,
}: FormTypeParams): Promise<void> => {
  try {
    await api.post("", {
      username: username,
      email: email,
      feedbackText: feedback,
    });

    // Clear form fields
    setEmail("");
    setUsername("");
    setFeedback("");

    // Show success alert
    alert("Your feedback has been submitted successfully!");
  } catch (error: unknown) {
    console.error("Error submitting feedback:", error);

    // Show error alert
    if (error instanceof Error) {
      alert(`Failed to submit feedback: ${error.message}`);
    } else {
      alert("An unknown error occurred while submitting feedback.");
    }
  }
};

export default sendFormData;
