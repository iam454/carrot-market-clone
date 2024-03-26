import Button from "@/components/button";
import Input from "@/components/input";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input
          required
          name="phoneNumber"
          type="number"
          placeholder="Phone Number"
          errors={[""]}
        />
        <Input
          required
          name="verificationCode"
          type="number"
          placeholder="Verification Code"
          errors={[""]}
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}
