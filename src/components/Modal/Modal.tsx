"use client";

import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md w-full max-w-[400px] px-5 py-8"
      >
        <h2 className="font-bold text-3xl text-center my-12">로그인</h2>
        <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"></section>
      </div>
    </div>
  );
}

export default Modal;
