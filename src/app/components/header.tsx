import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href={"/"}>
        <div className=" bg-gray-300 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-2 m-4 mt-1  space-y-1 sticky top-0 z-10 overflow-hidden">
          <div className="head">Clan Circle</div>
        </div>
      </Link>
    </>
  );
}
