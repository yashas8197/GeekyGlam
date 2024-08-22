import { useState } from "react";

const useLoading = (initialValue = false) => {
  const [loading, setLoading] = useState(initialValue);

  return { loading, setLoading };
};

export default useLoading;
