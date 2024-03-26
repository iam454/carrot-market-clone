"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function FormButton({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
