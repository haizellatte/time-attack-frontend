"use client";

import React, { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  return { value, onChangeHandler };
}

export default useInput;
