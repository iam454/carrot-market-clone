import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function Login() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput required type="email" placeholder="Email" errors={[""]} />
        <FormInput
          required
          type="password"
          placeholder="Password"
          errors={[""]}
        />
        <FormButton loading={false} text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
