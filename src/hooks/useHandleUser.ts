import { useState } from "react";

export const useHandleUser = () => {
  const savedUser = localStorage.getItem("username") ?? "Anonymous";
  const [user, setUser] = useState<string>(savedUser);

  const handleUserChange = (username: string) => {
    setUser(username);
    localStorage.setItem("username", username);
  };

  return { user, handleUserChange };
};
