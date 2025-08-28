export type FormTypeParams = {
  email: string;
  username: string;
  feedback: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setFeedback: React.Dispatch<React.SetStateAction<string>>;
};
