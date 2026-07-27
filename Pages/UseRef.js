import React, { useRef } from "react";

function UseRef() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}

export default UseRef;