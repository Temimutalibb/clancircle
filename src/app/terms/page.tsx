import Image from "next/image";
import Link from "next/link";

function Terms() {
  return (
    <>
      <div className="w-[80%] mx-auto text-gray-900">
        <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 m-4  space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-blue-400 rounded-full absolute -right-5 -top-7">
            <div className="absolute bottom-6 left-7 text-white text-2xl">
              {"terms"}
            </div>
          </div>
          <div className=" text-violet-400 text-sm ">{"Terms of Service"}</div>

          <h2 className="font-bold text-xl">1.Introduction</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Welcome to Clan Circle. By accessing or using our app, you agree to
            comply with and be bound by these Terms of Service.
          </div>
          <h2 className="font-bold text-l">2. Acceptance of Terms</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Your access to and use of Clan Circle is subject to these Terms of
            Service. By using our app, you agree to accept and comply with these
            terms.
          </div>

          <h2 className="font-bold text-xl">3. Changes to Terms</h2>

          <div className="text-sm text-zinc-500 leading-6">
            We reserve the right to modify these terms at any time. Any changes
            will be posted on this page, and it is your responsibility to review
            these terms regularly.
          </div>

          <h2 className="font-bold text-xl">4. User Responsibilities</h2>
          <div className="text-sm text-zinc-500 leading-6">
            You agree not to misuse our app. This includes, but is not limited
            to, engaging in any illegal or harmful activities, interfering with
            the app’s operation, or violating the rights of others.
          </div>

          <h2 className="font-bold text-xl">5. Intellectual Property</h2>

          <div className="text-sm text-zinc-500 leading-6">
            All content provided through our app, including text, graphics,
            logos, and software, is the property of Clan Circle and is protected
            by applicable laws.
          </div>

          <h2 className="font-bold text-xl">6. Privacy Policy</h2>

          <div className="text-sm text-zinc-500 leading-6">
            Your use of the app is also governed by our Privacy Policy, which
            can be found at{" "}
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/policy"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Privacy Policy
            </Link>
            .
          </div>

          <h2 className="font-bold text-xl">
            7. Disclaimers and Limitation of Liability
          </h2>
          <div className="text-sm text-zinc-500 leading-6">
            Our app is provided on an “as-is” basis. We do not make any
            warranties, express or implied, regarding the operation or
            availability of the app. To the fullest extent permitted by law, we
            disclaim all liability for any damages arising from your use of the
            app.
          </div>

          <h2 className="font-bold text-xl">8. Termination</h2>
          <div className="text-sm text-zinc-500 leading-6">
            We reserve the right to terminate or suspend your access to our app
            if you violate these terms or engage in any prohibited conduct.
          </div>
        </div>
      </div>
    </>
  );
}

export default Terms;
