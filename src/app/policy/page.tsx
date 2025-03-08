import Image from "next/image";

function Policy() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 m-4  space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-blue-400 rounded-full absolute -right-5 -top-7">
            <div className="absolute bottom-6 left-7 text-white text-2xl">
              {"policy"}
            </div>
          </div>
          <div className=" text-violet-400 text-sm ">{"Privacy Policy"}</div>

          <h2 className="font-bold text-xl">1.Introduction</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Welcome to Clan Circle. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and protect your information when you use our
            app.
          </div>
          <h2 className="font-bold text-l">2. Information Collection</h2>
          <div className="text-sm text-zinc-500 leading-6">
            We may collect the following types of information:
            <ul>
              <li>
                <b>Personal Information:</b> Such as your name, email address,
                and other contact details when you register or interact with our
                app
              </li>
              <li>
                <b>Usage Data:</b> Information about how you use our app,
                including your interactions, preferences, and device
                information.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">3. Information Use</h2>

          <div className="text-sm text-zinc-500 leading-6">
            We use the information we collect to:
            <ul>
              <li>Provide and improve our app's features and services.</li>
              <li>
                Communicate with you, including sending updates, notifications,
                and promotional materials.
              </li>
              <li>
                Analyze usage patterns to enhance user experience and app
                performance.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">4. Information Sharing</h2>
          <div className="text-sm text-zinc-500 leading-6">
            We don't share information with Third parties.
            <br />
            <b>Legal Requirements:</b> When required by law or to protect our
            rights and users' safety.
          </div>

          <h2 className="font-bold text-xl">5. Security Measures</h2>

          <div className="text-sm text-zinc-500 leading-6">
            We implement security measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
            However, please note that no method of transmission over the
            internet or electronic storage is completely secure.
          </div>

          <h2 className="font-bold text-xl">6. User Rights</h2>

          <div className="text-sm text-zinc-500 leading-6">
            You have the right to:
            <ul>
              <li>Access and update your personal information.</li>
              <li>Request the deletion of your personal information.</li>
              <li>Opt-out of receiving promotional communications.</li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">7. Changes to Privacy Policy</h2>
          <div className="text-sm text-zinc-500 leading-6">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and it is your responsibility to review
            this policy regularly.
          </div>

          <h2 className="font-bold text-xl">8. Contact Information</h2>
          <div className="text-sm text-zinc-500 leading-6">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at
            <div className="row-start-3 flex gap-6  items-center justify-center overflow-hidden">
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
    </>
  );
}

export default Policy;
