import React, { useEffect, useRef } from "react";

const FocusRef = () => {
 const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <input
        ref={inputRef}
        type="text"
        placeholder="Typing..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default FocusRef;
