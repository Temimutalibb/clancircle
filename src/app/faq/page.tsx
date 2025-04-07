import Image from "next/image";

function Faq() {
  return (
    <div>
      <div className="w-[80%] mx-auto text-gray-900">
        <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 m-4  space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-blue-400 rounded-full absolute -right-5 -top-7">
            <div className="absolute bottom-6 left-7 text-white text-2xl">
              {"FAQ"}
            </div>
          </div>
          <div className=" text-violet-400 text-sm ">
            {"Frequently Asked Questions (FAQ)"}
          </div>

          <h2 className="font-bold text-xl">1. What is this app about?</h2>
          <div className="text-sm text-zinc-500 leading-6">
            This app helps users share and engage with content more effectively
            by creating and following interactive circles based on their
            interests.
          </div>
          <h2 className="font-bold text-l">2. How do I sign up?</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>Download the app from the Play Store.</li>
              <li>
                Sign up using your email and password or a third-party provider.
              </li>
              <li>Verify your email to start using the app.</li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">3. How do I create a Circle?</h2>

          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>Tap the my circle button in your home screen.</li>
              <li>
                There you will see all your circles and can create a new one.
              </li>
              <li>Choose a name, description, and category for your Circle.</li>
              <li>Set privacy preferences and start sharing content.</li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">4. How do I follow a Circle?</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                You can search for Circle or click the explore button to see
                random Circles.
              </li>
              <li>Tap Follow on any Circle you’re interested in.</li>
              <li>You’ll get notified if the circle owner post a link.</li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">5. How do I earn rewards?</h2>

          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                Engage with content by sharing and interacting Links within
                Circles.
              </li>
              <li>Earn rewards based on clicks and ad interactions.</li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">
            6. Can I invite friends to the app?
          </h2>

          <div className="text-sm text-zinc-500 leading-6">
            Yes! gives users your referral code and earn coins for each user you
            invite.
          </div>

          <h2 className="font-bold text-xl">
            7. How do I delete my account and data?
          </h2>
          <div className="text-sm text-zinc-500 leading-6">
            If you want to delete your account:
            <ul>
              <li>Go to your profile screen.</li>
              <li>Select Delete Account and follow the instructions.</li>
              <li>
                This will permanently remove your account and all associated
                data.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">
            8. How do I report inappropriate content?
          </h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>Tap the Report button on any post.</li>
              <li>Select a reason for reporting.</li>
              <li>Our team will review and take necessary action.</li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">9. Is there customer support?</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Yes, you can contact us via the Support section in the app or email
            us at:
            <div className="mt-5 flex gap-6 bg-gray-900 items-center justify-center overflow-hidden">
              <a
                href="https://www.facebook.com/share/15woh1KVp5/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/facebook.png"
                  alt="facebook logo"
                  width={50}
                  height={10}
                  priority
                />
              </a>{" "}
              <a
                href="https://x.com/clancircleapp?t=nutKedG6whIpDREMoy-tFg&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/twitter.png"
                  alt="x logo"
                  width={50}
                  height={10}
                  priority
                />
              </a>{" "}
              <a
                href="https://www.instagram.com/clan.circle?igsh=MXE1bGRsdTB2eXQ4bg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/instagram.png"
                  alt="instagram logo"
                  width={50}
                  height={10}
                  priority
                />
              </a>
              <a
                href="https://youtube.com/@clancircle?si=2JaH1kva_tqOgmvY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/youtube.png"
                  alt="youtube logo"
                  width={50}
                  height={10}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
