import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  -- The Design School`;
  }, [title]);
};

export default useTitle;
