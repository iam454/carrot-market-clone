import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          required
          name="username"
          type="text"
          placeholder="Username"
          errors={[""]}
        />
        <FormInput
          required
          name="email"
          type="email"
          placeholder="Email"
          errors={[""]}
        />
        <FormInput
          required
          name="password"
          type="password"
          placeholder="Password"
          errors={[""]}
        />
        <FormInput
          required
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          errors={[""]}
        />
        <FormButton text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
