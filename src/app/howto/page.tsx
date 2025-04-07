import Link from "next/link";

function Howto() {
  return (
    <div>
      <div className="w-[80%] mx-auto text-gray-900">
        <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 m-4  space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-blue-400 rounded-full absolute -right-5 -top-7">
            <div className="absolute bottom-6 left-7 text-white text-2xl">
              {"about"}
            </div>
          </div>
          <div className=" text-violet-400 text-sm ">{"About"}</div>

          <div className="text-sm text-zinc-500 leading-6">
            Clan Circle is a social engagement platform that allows users to
            create and follow Circles, share content, and earn rewards through
            interactions. Whether you’re looking to increase engagement,
            discover new content, or grow your audience, Clan Circle makes it
            easy and rewarding.
          </div>
          <h2 className="font-bold text-l">How to use Clan Circle</h2>
          <div className="text-sm text-zinc-500 leading-6"></div>
          <h2 className="font-bold text-l">Need Help?</h2>
          <div>
            check out our{" "}
            <b>
              {" "}
              <Link
                className=" hover:underline hover:underline-offset-4"
                href="/faq"
              >
                <b>FAQ</b>
              </Link>
            </b>{" "}
            or contact support for assistance{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howto;
