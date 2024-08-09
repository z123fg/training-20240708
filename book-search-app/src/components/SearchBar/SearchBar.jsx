import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  // debounce - delay the execution of a function
  // throttle - limit the frequency of a fucntion call
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const debouncedOnSubmit = useCallback(_.debounce(onSubmit, 1000), [onSubmit]);

  useEffect(() => {
    debouncedOnSubmit(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <button
        onClick={() => {
          onSubmit(inputValue);
        }}
      >
        Submit
      </button>
    </div>
  );
}
