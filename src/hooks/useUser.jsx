import { useContext } from "react";
import { AuthContent } from "../provider/AuthProvider";

const useUser = () => {
  const { user, loading } = useContext(AuthContent);
  return { user, loading };
};

export default useUser;
