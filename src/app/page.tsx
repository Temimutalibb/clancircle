"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showWhat, setShowWhate] = useState(false);
  return (
    <>
      <div className="relative" style={{ backgroundColor: "#1E252F" }}>
        {/*web view*/}
        <div className="relative hidden  sm:block">
          <div className="p-2 pl-0 ml-3 mb-3 mr-3 text-center tracking-[40px]">
            This is Clan Circle space
          </div>

          <div className="flex gap-1 m-5   items-center justify-between">
            <div
              className="w-[600px] h-[480px] self-center pt-10 "
              style={{ backgroundColor: " #00366e" }}
            >
              <div className=" two w-[100%] h-[35%] m-0 overflow-hidden flex flex-row ">
                <div
                  className="w-[140px] h-[140px] m-3 gap-3 p-3 flex flex-col justify-center items-center"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "50%" }}
                >
                  <div className="w-[74] h-[95]">
                    <Image
                      src="/engagement.png"
                      alt="Clan Circle logo"
                      width={74}
                      height={95}
                      priority
                    />
                  </div>
                  <div
                    className="w-[100] h-[75] text-center text-xs font-bold"
                    style={{ color: "#0051A5" }}
                  >
                    Boost your engagement
                  </div>
                </div>

                <div className="row-start-1 col-start-4 text-s text-center">
                  A universe where everyone gets paid
                </div>
              </div>

              <div className=" two w-[100%] h-[18%]  overflow-hidden  flex items-center justify-center ">
                <div>
                  <Image
                    src="/288.png"
                    alt="Clan Circle logo"
                    width={120}
                    height={120}
                    priority
                  />
                </div>
              </div>

              <div className=" two w-[100%] h-[45%] m-0 overflow-hidden justify-between flex flex-row">
                <div
                  className="w-[140px] h-[140px] mt-5 m-3 mb-0  gap-3
              self-end p-3 flex flex-col justify-center items-center"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "50%" }}
                >
                  <div className="w-[74] h-[95]">
                    <Image
                      src="/earn.png"
                      alt="Clan Circle logo"
                      width={74}
                      height={95}
                      priority
                    />
                  </div>
                  <div
                    className="w-[100] h-[75] text-center text-xs font-bold"
                    style={{ color: "#0051A5" }}
                  >
                    Earn crypto
                  </div>
                </div>

                <div
                  className="w-[140px] h-[140px] mr-3 self-start gap-3  p-3 flex flex-col justify-center items-center"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "50%" }}
                >
                  <div className="w-[74] h-[95]">
                    <Image
                      src="/connetct.png"
                      alt="Clan Circle logo"
                      width={74}
                      height={95}
                      priority
                    />
                  </div>
                  <div
                    className="w-[100] h-[75] text-center text-xs font-bold"
                    style={{ color: "#0051A5" }}
                  >
                    Connect
                  </div>
                </div>
              </div>
            </div>
            {/******************************* */}
            <div className="w-[600px] h-[480px] overflow-hidden self-center pt-10">
              <div
                className="text-white text-[36px] mt-5 text-center tracking-[10px]"
                style={{ fontFamily: "Impact, sans-serif" }}
              >
                The Revolution has begun
              </div>
              <div
                className="w-[100%] h-[153px] gap-2 mt-3 p-3 overflow-hidden  rounded-lg flex flex-col"
                style={{ backgroundColor: "#003F7F" }}
              >
                <div className="text-white text-center  text-[16px]  tracking-[5px] font-bold">
                  You’re about to be part of something great. Start now.
                </div>
                <div className="self-center w-[70] h-[70]">
                  <Image
                    src="/arrowdown.png"
                    alt="Clan Circle logo"
                    width={70}
                    height={50}
                    priority
                  />
                </div>
              </div>

              <div className="mt-5 gap-3 flex justify-between items-center">
                {/* First Link */}
                <a
                  className="w-[200px] h-[70px] flex items-center justify-center rounded-xl bg-gray-100"
                  href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/gg-play.webp"
                    alt="Clan Circle logo"
                    width={200}
                    height={70}
                    priority
                    className="object-contain"
                  />
                </a>

                {/* Second Link */}
                <a
                  className="w-[200px] h-[70px] flex font-bold justify-around gap-2 items-center rounded-xl bg-gray-100"
                  href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/web.png"
                    alt="Clan Circle logo"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                  <div className="text-gray-900 text-[18px]">Web</div>
                </a>
              </div>
            </div>
          </div>
          {/**nextbox */}
          <div className=" flex gap-2 justify-between m-5 mt-7 h-[auto] ml-5 mr-5">
            <div
              style={{ backgroundColor: "#1E1E1E" }}
              className="w-[250] h-[150] p-1 cursor-pointer"
              onClick={() => setShowWhate(!showWhat)}
            >
              <div>
                <Image
                  src="/what.png"
                  alt="Clan Circle logo"
                  width={90}
                  height={90}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center p-1 font-bold">
                What is Clan Circle
              </div>
            </div>

            <Link
              href="/how"
              style={{ backgroundColor: "#1E1E1E" }}
              className="w-[250] h-[150] p-1 cursor-pointer"
            >
              <div>
                <Image
                  src="/howto.png"
                  alt="Clan Circle logo"
                  width={90}
                  height={90}
                  priority
                  className="object-cover"
                />
              </div>
              <div className="text-center p-1 font-bold">
                How to use clan circle
              </div>
            </Link>

            <Link
              href="/who"
              style={{ backgroundColor: "#1E1E1E" }}
              className="w-[250] h-[150] cursor-pointer p-1"
            >
              <div>
                <Image
                  src="/who.png"
                  alt="Clan Circle logo"
                  width={90}
                  height={90}
                  priority
                  className="object-cover"
                />
              </div>
              <div className="text-center p-1 font-bold">
                Who is Clan Circle for
              </div>
            </Link>

            <Link
              href="/airdrop"
              style={{ backgroundColor: "#1E1E1E" }}
              className="w-[250] h-[150] cursor-pointer p-1"
            >
              <div>
                <Image
                  src="/airdrop.png"
                  alt="Clan Circle logo"
                  width={90}
                  height={90}
                  priority
                  className="object-cover"
                />
              </div>
              <div className="text-center p-1 font-bold">
                Clan Circle Airdrop
              </div>
            </Link>
          </div>
          {/**socials */}
          <div className="mb-10 mt-10  flex gap-8  items-center justify-center overflow-hidden">
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
            </a>
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
            </a>
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
            <a
              href="https://t.me/clancircle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/telegram.png"
                alt="youtube logo"
                width={50}
                height={10}
              />
            </a>
          </div>
          {/* Footer Section */}
          <footer className="mt-10  m-auto flex p-5 w-[80%] gap-6 flex-wrap items-center justify-around">
            {[
              { href: "/whitepaper", text: "WhitePaper", icon: "/paper.png" },
              { href: "/about", text: "About", icon: "/about.png" },
              { href: "/terms", text: "Terms", icon: "/terms.png" },
              { href: "/faq", text: "FAQ", icon: "/faq.png" },
            ].map(({ href, text, icon }) => (
              <Link
                key={text}
                href={href}
                className="flex items-center font-bold gap-2 hover:underline hover:underline-offset-4"
              >
                <Image src={icon} alt={`${text} icon`} width={30} height={30} />
                {text}
              </Link>
            ))}
          </footer>
        </div>

        {/*mobile view*/}
        <div
          style={{ backgroundColor: "#1E252F" }}
          className=" relative block sm:hidden"
        >
          <div className="p-2 pl-0 text-center mb-1 mr-3 text-center tracking-[10px]">
            This is Clan Circle space
          </div>
          <div className="flex  w-[90%] items-center justify-between">
            <div
              className="text-white text-[36px] text-center tracking-[10px]"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              The Revolution has begun
            </div>

            <div>
              <Image
                src="/new512.png"
                alt="Clan Circle logo"
                width={120}
                height={120}
                priority
              />
            </div>
          </div>

          <div
            className="w-[90%] h-[160px] gap-2  m-5  p-2   rounded-lg flex flex-col"
            style={{ backgroundColor: "#003F7F" }}
          >
            <div className="text-white text-center  text-[16px]  tracking-[5px] font-bold">
              You’re about to be part of something great. Start now.
            </div>
            <div className="self-center w-[70] h-[70]">
              <Image
                src="/arrowdown.png"
                alt="Clan Circle logo"
                width={70}
                height={50}
                priority
              />
            </div>
          </div>

          <div className="m-5 gap-3 flex justify-between items-center">
            {/* First Link */}
            <a
              className="w-[200px] h-[70px] flex items-center justify-center rounded-xl bg-gray-100"
              href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/gg-play.webp"
                alt="Clan Circle logo"
                width={200}
                height={70}
                priority
                className="object-contain"
              />
            </a>

            {/* Second Link */}
            <a
              className="w-[200px] h-[70px] flex font-bold justify-around gap-2 items-center rounded-xl bg-gray-100"
              href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/web.png"
                alt="Clan Circle logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
              <div className="text-gray-900 text-[18px]">Web</div>
            </a>
          </div>

          {/*next box*/}
          <div className=" mt-20">
            <div className="flex justify-around items-center">
              <div
                style={{ backgroundColor: "#1E1E1E" }}
                className="w-[200] h-[140] p-1 cursor-pointer"
                onClick={() => setShowWhate(!showWhat)}
              >
                <div>
                  <Image
                    src="/what.png"
                    alt="Clan Circle logo"
                    width={80}
                    height={80}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-center p-1 font-bold">
                  What is Clan Circle
                </div>
              </div>

              <div
                className="w-[150px] h-[150px]  gap-3 p-3 flex flex-col justify-center items-center"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "50%" }}
              >
                <div className="w-[74] h-[95]">
                  <Image
                    src="/engagement.png"
                    alt="Clan Circle logo"
                    width={74}
                    height={95}
                    priority
                  />
                </div>
                <div
                  className="w-[100] h-[75] text-center text-xs font-bold"
                  style={{ color: "#0051A5" }}
                >
                  Boost your engagement
                </div>
              </div>
            </div>

            <div className="flex justify-around mt-5 items-center">
              <div
                className="w-[150px] h-[150px]  gap-3 p-3 flex flex-col justify-center items-center"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "50%" }}
              >
                <div className="w-[74] h-[95]">
                  <Image
                    src="/earn.png"
                    alt="Clan Circle logo"
                    width={74}
                    height={95}
                    priority
                  />
                </div>
                <div
                  className="w-[100] h-[75] text-center text-xs font-bold"
                  style={{ color: "#0051A5" }}
                >
                  Earn crypto
                </div>
              </div>

              <Link
                href="/how"
                style={{ backgroundColor: "#1E1E1E" }}
                className="w-[200] h-[140] p-1 cursor-pointer"
              >
                <div>
                  <Image
                    src="/howto.png"
                    alt="Clan Circle logo"
                    width={80}
                    height={80}
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-1 font-bold">
                  How to use clan circle
                </div>
              </Link>
            </div>

            <div className="flex flex justify-around mt-5 items-center">
              <Link
                href="/who"
                style={{ backgroundColor: "#1E1E1E" }}
                className="w-[200] h-[140] p-1 cursor-pointer"
              >
                <div>
                  <Image
                    src="/who.png"
                    alt="Clan Circle logo"
                    width={80}
                    height={80}
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-1 font-bold">
                  Who is Clan Circle for
                </div>
              </Link>
              <div
                className="w-[150px] h-[150px]  gap-3 p-3 flex flex-col justify-center items-center"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "50%" }}
              >
                <div className="w-[74] h-[95]">
                  <Image
                    src="/connetct.png"
                    alt="Clan Circle logo"
                    width={74}
                    height={95}
                    priority
                  />
                </div>
                <div
                  className="w-[100] h-[75] text-center text-xs font-bold"
                  style={{ color: "#0051A5" }}
                >
                  Connect
                </div>
              </div>
            </div>

            <div className="flex flex justify-around mt-5 items-center">
              <div className="w-[150px] h-[150px]  gap-3 p-3 flex flex-col justify-center items-center">
                A universe where everyone gets paid
              </div>
              <Link
                href="airdrop"
                style={{ backgroundColor: "#1E1E1E" }}
                className="w-[200] h-[140] p-1 cursor-pointer"
              >
                <div>
                  <Image
                    src="/airdrop.png"
                    alt="Clan Circle logo"
                    width={80}
                    height={80}
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-1 font-bold">
                  Clan Circle Airdrop
                </div>
              </Link>
            </div>
          </div>

          {/**socials */}
          <div className=" mb-10 mt-20  flex gap-5  items-center justify-center overflow-hidden">
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
            </a>
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
            </a>
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
            <a
              href="https://t.me/clancircle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/telegram.png"
                alt="youtube logo"
                width={50}
                height={10}
              />
            </a>
          </div>
          {/* Footer Section */}
          <footer className="mt-10  m-auto flex p-5 w-[100%] gap-4 flex-wrap items-center justify-around">
            {[
              { href: "/whitepaper", text: "WhitePaper", icon: "/paper.png" },
              { href: "/about", text: "About", icon: "/about.png" },
              { href: "/terms", text: "Terms", icon: "/terms.png" },
              { href: "/faq", text: "FAQ", icon: "/faq.png" },
            ].map(({ href, text, icon }) => (
              <Link
                key={text}
                href={href}
                className="flex items-center font-bold gap-2 hover:underline hover:underline-offset-4"
              >
                <Image src={icon} alt={`${text} icon`} width={30} height={30} />
                {text}
              </Link>
            ))}
          </footer>
        </div>
        {showWhat && (
          <div className="bg-gray-100 p-5 w-[80%] left-1/2 -translate-x-1/2 rounded-2xl absolute top-1/2 -translate-y-1/2">
            <div className="text-center font-bold p-5 text-gray-900 ">
              What is Clan Circle?
            </div>
            <div className="text-center leading-relaxed  text-gray-900 bottom-0">
              You’ve asked the right question. Clan Circle is many things, but
              we won’t bore you with long explanations because our mantra is
              less talk, more action. So, what is Clan Circle? We are redefining
              online wealth distribution. You could say we are the bridge
              between Web2 and Web3. Or you could say we are unlocking the
              hidden wealth of Web2 and Web3. Whichever way you put it, you are
              right. Our goal is simple: help every Clan Circle user optimize
              their profit, and that is exactly what we do. Clan Circle is a
              community-driven app that helps users boost engagement and
              optimize profit. We believe we can achieve far more together
              because the best way to succeed is as a team. Clan Circle is a
              circle of clans, promoting and helping each other and getting
              rewarded for doing so. There is no limit to what we can achieve.
              We are building and improving every day.
            </div>

            <div className="w-[100] m-auto p-3 h-[95]">
              <Link href="/about" className="bg-blue-500  ">
                See more
              </Link>
            </div>

            <div
              onClick={() => setShowWhate(!showWhat)}
              className="w-[74] m-auto p-3 h-[95]"
            >
              <Image
                src="/cancel.png"
                alt="Clan Circle logo"
                width={74}
                height={95}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
