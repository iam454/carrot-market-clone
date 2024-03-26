"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          required
          name="username"
          type="text"
          placeholder="Username"
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
        />
        <Input
          required
          name="email"
          type="email"
          placeholder="Email"
          errors={state?.fieldErrors.email}
        />
        <Input
          required
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors.password}
          minLength={4}
        />
        <Input
          required
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          errors={state?.fieldErrors.confirmPassword}
          minLength={4}
        />
        <Button text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
