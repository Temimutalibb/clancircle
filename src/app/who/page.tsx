import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-5">
        {/* Header Section */}
        <header
          className="flex justify-between mt-10"
          aria-labelledby="header-title"
        >
          <h1 id="header-title" className="sr-only">
            Clan Circle - Turn Clicks into Crypto
          </h1>
          <div className="w-[60%] flex flex-col gap-3">
            <h1 className="text-xl font-bold text-white  md:text-2xl">
              Turn Clicks into Crypto - Earn $CLAN While Growing Your Audience!
            </h1>
            <p className="text-xs md:text-lg md:text-gray-500">
              Share links in Circles, get more engagement, and earn rewards on
              every click.
            </p>
            <div className="flex gap-1 flex-wrap">
              <button className="rounded-full text-xs  bg-blue-800  h-7 w-20 p-2 text-white">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle&pcampaignid=web_share"
                  aria-label="Get Started on Playstore"
                >
                  Get Started
                </a>
              </button>
              <Link
                href="/about"
                className="rounded-full text-xs bg-gray-800 h-7 w-20 p-2 text-white"
                aria-label="Learn more about Clan Circle"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-[40%]  flex justify-end">
            <Image
              src="/new3d.png"
              alt="Clan Circle logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* How It Works Section */}
          <section aria-labelledby="how-it-works" className="mt-10">
            <h2 className="text-lg pb-2 font-bold text-white">How it Works</h2>
            <div className="flex gap-2 flex-wrap items-center justify-between">
              {[
                {
                  step: "1",
                  text: "Create a Circle and share your contents links",
                },
                {
                  step: "2",
                  text: "Get clicks from friends, followers, or random users",
                },
                {
                  step: "3",
                  text: "Earn $CLANCoiN tokens for every interaction",
                },
                {
                  step: "4",
                  text: "Use $CLANCOIN to unlock premium features or cash out!",
                },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  className="bg-gray-900 w-[45%] h-24 gap-4 p-2 flex flex-col items-center justify-items-center md:w-[20%]"
                >
                  <div className="rounded-full text-xs text-center bg-blue-800 p-1 w-5">
                    {step}
                  </div>
                  <p className="text-xs text-center">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Join Circle Section */}
          <section
            aria-labelledby="why join circle"
            className="mt-10 flex justify-between gap-10 flex-wrap"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white">Why Join Circle</h2>
              {[
                {
                  icon: "/dollar.png",
                  title: "For Content Creators",
                  description: "Boost engagement & monetize clicks",
                },
                {
                  icon: "/ads.png",
                  title: "For Advertisers",
                  description: "Reach targeted audiences with native ads",
                },
                {
                  icon: "/dollar.png",
                  title: "For Crypto Enthusiasts",
                  description: "Earn and trade $CLANCOIN",
                },
                {
                  icon: "/group.png",
                  title: "For Everyone",
                  description:
                    "A fun way to get rewarded for interacting with content",
                },
              ].map(({ icon, title, description }) => (
                <div key={title} className="flex flex-col gap-1">
                  <div className="flex gap-2 text-sm items-center">
                    <Image
                      src={icon}
                      alt={`${title} icon`}
                      width={13}
                      height={13}
                      priority
                    />
                    <h3 className="font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-xs ml-5">{description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white">
                Tokenomics & Rewards Systems
              </h2>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 text-sm items-center">
                  <Image
                    src="/check.png"
                    alt="Total Supply icon"
                    width={13}
                    height={13}
                    priority
                  />
                  <h3 className="font-bold text-white">Total Supply:</h3>
                </div>
                <p className="text-xs ml-5">Unlimited</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 text-sm items-center">
                  <Image
                    src="/profile.png"
                    alt="Rewards System icon"
                    width={13}
                    height={13}
                    priority
                  />
                  <h3 className="font-bold text-white">Rewards System:</h3>
                </div>
                <p className="text-xs ml-5">
                  Ad revenue converts to OCASH (1 USDT = 1 OCASH)
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 text-sm items-center">
                  <Image
                    src="/crown.png"
                    alt="Rewards System icon"
                    width={13}
                    height={13}
                    priority
                  />
                  <h3 className="font-bold text-white">Premium Features:</h3>
                </div>
                <p className="text-xs ml-5">More Circles</p>
                <p className="text-xs ml-5">Pinning Links</p>
                <p className="text-xs ml-5">In-app promotions</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mt-10 flex flex-col gap-2 items-center">
            <h2 className="text-lg font-bold text-white">
              Join Now & Start Earning!
            </h2>
            <div className="flex gap-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle&pcampaignid=web_share"
                className="rounded-full text-xs h-7 w-35 p-2 bg-blue-800 text-white text-center"
                aria-label="Get Started on Playstore"
              >
                Get Started
              </a>
              <Link
                href="/about"
                className="rounded-full text-xs h-7 w-35 p-2 bg-gray-800 text-white"
              >
                Explore Features
              </Link>
            </div>
          </section>
          <section aria-labelledby="socials">
            <div className="flex flex-col mb-10 mt-10 gap-5  items-center">
              <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <div className="mb-1">
                  Clan Circle is redefining social media engagement by ensuring
                  every user benefits from interactions. With a sustainable
                  tokenomics model, an active burn mechanism, and an
                  investor-friendly ICO, $CLANCOIN presents a compelling
                  opportunity for both users and investors alike.
                </div>
              </div>

              <div id="playstore">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="dark:invert"
                    src="/gg-play.png"
                    alt="google play logo"
                    width={180}
                    height={38}
                    priority
                  />
                </a>
              </div>
            </div>
            <div className="row-start-2 mb-10 mt-10  flex gap-4  items-center justify-center overflow-hidden">
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
                />
              </a>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="mt-20 flex gap-6 flex-wrap items-center justify-center">
          {[
            { href: "/whitepaper", text: "WhitePaper", icon: "/file.svg" },
            { href: "/about", text: "About", icon: "/window.svg" },
            { href: "/terms", text: "Terms", icon: "/window.svg" },
            { href: "/faq", text: "FAQ", icon: "/file.svg" },
          ].map(({ href, text, icon }) => (
            <Link
              key={text}
              href={href}
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image src={icon} alt={`${text} icon`} width={16} height={16} />
              {text}
            </Link>
          ))}
        </footer>
      </div>
    </>
  );
}
