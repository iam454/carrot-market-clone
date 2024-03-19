import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          className="primary-btn h-10 flex items-center justify-center gap-2"
          href="/github/start"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Continue with Github</span>
        </Link>
        <Link
          className="primary-btn h-10 flex items-center justify-center gap-2"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
