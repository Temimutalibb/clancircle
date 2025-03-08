import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/icon432.png"
          alt="clan circle  logo"
          width={180}
          height={38}
          priority
        />
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-1">
            Clan Circle is redefining social media engagement by ensuring every
            user benefits from interactions. With a sustainable tokenomics
            model, an active burn mechanism, and an investor-friendly ICO, $CLAN
            presents a compelling opportunity for both users and investors
            alike.
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              className="dark:invert"
              src="/apple-store.png"
              alt="Apple Store logo"
              width={180}
              height={38}
              priority
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
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
      </main>

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
      <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/whitepaper"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          WhitePaper
        </Link>

        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/whitepaper"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          about
        </Link>

        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          about
        </Link>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://youtube.com/@clancircle?si=2JaH1kva_tqOgmvY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Video
        </a>
      </footer>
    </div>
  );
}
