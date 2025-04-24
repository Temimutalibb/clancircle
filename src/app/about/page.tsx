import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto text-gray-900">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        {/* Header Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-400 rounded-full absolute -right-4 -top-6 sm:-right-5 sm:-top-7 flex items-center justify-center">
          <span className="text-white text-xl sm:text-2xl font-semibold">
            About
          </span>
        </div>

        {/* Section Title */}
        <div className="text-violet-500 text-sm uppercase font-semibold">
          About
        </div>

        {/* Introduction */}
        <p className="text-sm text-zinc-500 leading-6">
          Clan Circle is a social engagement platform that allows users to
          create and follow Circles, share content, and earn rewards through
          interactions. Whether you&#39;re looking to increase engagement,
          discover new content, or grow your audience, Clan Circle makes it easy
          and rewarding.
        </p>

        {/* How to Use */}

        <h2 className="font-bold text-lg">How to Use Clan Circle</h2>

        {/* Create Circle */}
        <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
          <div className="space-y-4 flex-1">
            <section>
              <h3 className="font-semibold text-base">
                How to Create a Circle
              </h3>
              <ul className="text-sm text-zinc-500 leading-6 list-disc list-inside space-y-1">
                <li>
                  Click on <b>MyCircle</b> on the homepage.
                </li>
                <li>View all your circles or create a new one.</li>
                <li>
                  Click the <b>Add</b> icon.
                </li>
                <li>Enter a circle name and description.</li>
                <li>Set a unique identifier for easy search.</li>
                <li>Choose if only you can post, or allow others too.</li>
                <li>
                  Click <b>Done</b> to create the circle.
                </li>
                <li>Click on the circle to start posting links.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mt-4">
                How to Create a Link
              </h3>
              <ul className="text-sm text-zinc-500 leading-6 list-disc list-inside space-y-1">
                <li>Select a circle that allows link posting.</li>
                <li>
                  Click the <b>Post Link Here</b> button.
                </li>
                <li>Select the platform where your content is hosted.</li>
                <li>Paste the content URL.</li>
                <li>Choose the type and category of your content.</li>
                <li>Name your link for easier recognition.</li>
                <li>Add a short description.</li>
                <li>
                  Click <b>Post</b>.
                </li>
                <li>
                  Posting a link costs 100 $CLAN – part of the token burn
                  system.
                </li>
              </ul>
            </section>
          </div>

          {/* Image Section */}
          <div className="mt-4 sm:mt-4">
            <h3 className="font-semibold text-base mb-2  sm:text-center">
              Circle screen preview
            </h3>
            <div className="rounded-xl sm:overflow-hidden sm:shadow-md">
              <Image
                src="/mycircle.jpg" // replace with actual image path
                alt="Phone Home Page"
                width={250}
                height={400}
                className=" object-cover w-64 sm:h-96  sm:w-full sm:h-auto"
              />
            </div>
          </div>
        </div>

        {/* Create Link */}

        {/* Earn Coins */}
        <section>
          <h3 className="font-semibold text-base mt-4">How to Earn Coins</h3>
          <ul className="text-sm text-zinc-500 leading-6 list-disc list-inside space-y-1">
            <li>
              Check in on the <b>Daily Task</b> screen every hour.
            </li>
            <li>Earn coins when users click your posted links.</li>
            <li>
              Click links in your own or followed circles, and on FastLink.
            </li>
          </ul>
        </section>

        {/* Features Section */}

        {/* Feature List */}
        <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
          <div className="space-y-4 flex-1">
            <h2 className="font-bold text-lg mt-8">Features</h2>
            <div>
              <h3 className="font-semibold text-base">Daily Task</h3>
              <p className="text-sm text-zinc-500">
                Check in every hour to earn coins.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">My Circle</h3>
              <p className="text-sm text-zinc-500">
                View and manage your circles or create new ones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">FastLink</h3>
              <p className="text-sm text-zinc-500">
                Click random links quickly and earn coins.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">Explore</h3>
              <p className="text-sm text-zinc-500">
                Discover new Circles and content through search.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base">Referral Program</h3>
              <p className="text-sm text-zinc-500">
                Invite friends to Clan Circle and earn rewards when they sign up
                and engage. Click <b>Get Started</b> to copy your referral code.
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Clan Circle lets you track who clicked your link, how often,
                promote or report links, delete links, and block users.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-4 sm:mt-4">
            <h3 className="font-semibold text-base mb-2 sm:text-center">
              App Home Page Preview
            </h3>
            <div className="rounded-xl sm:overflow-hidden sm:shadow-md">
              <Image
                src="/homepage.jpg" // replace with actual image path
                alt="Phone Home Page"
                width={250}
                height={400}
                className=" object-cover w-64 sm:h-96  sm:w-full sm:h-auto"
              />
            </div>
          </div>
        </div>

        {/* Help Section */}
        <h2 className="text-lg font-semibold mt-8">Need Help?</h2>
        <p className="text-sm text-zinc-500">
          Check out our{" "}
          <Link href="/faq" className="text-blue-600 hover:underline font-bold">
            FAQ
          </Link>{" "}
          or contact support for assistance.
        </p>
      </div>
    </div>
  );
}

export default About;
