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
        <h2 className="font-bold text-lg">What is Clan Circle?</h2>
        <p className="text-sm text-zinc-900 leading-6">
          <b>Clan Circle</b> is a community-driven app designed to help users
          boost their online engagement—and more importantly—make money while
          doing it. In today’s digital world, ads generate billions of dollars
          for big platforms. While a portion of that revenue goes to content
          creators, the everyday fans who support and interact with this content
          often earn nothing. Also, creators with lower engagement struggle to
          benefit from the ecosystem. <b>Clan Circle is here to change that.</b>
        </p>
        <hr />
        <h2 className="font-bold text-lg">The Problem We&#39;re Solving</h2>
        <p className="text-sm text-zinc-900 leading-6">
          We believe everyone who spends time online—liking, watching,
          sharing—deserves to benefit from that activity. The current system
          mainly rewards big creators and ad networks. But what about the fans
          who make content go viral? What about smaller creators who need
          support to grow? That’s where we come in.
        </p>
        <hr />

        <h2 className="font-bold text-lg">How Clan Circle Works</h2>
        <section>
          <ul className="text-sm text-zinc-900 leading-6 list-disc list-inside space-y-1">
            <li>
              <b>Community-Powered Engagement: </b> Users join or create circles
              around their favorite content. By sharing links and engaging with
              each other’s posts, everyone boosts visibility and
              traffic—together.
            </li>

            <li>
              <b>Earning While Clicking:</b>When users click on shared links,
              both the clicker and the content sharer earn in-app coins called
              $CLANCOIN.
            </li>
            <li>
              <b>Check-in System:</b> Users can “check in” every 15 minutes to
              unlock new links and increase their earning chances.
            </li>
            <li>
              <b>Ad Revenue as a Backbone:</b> Our platform shows in-app ads.
              When users view or interact with these ads, we share the revenue
              with them. This creates a fair ecosystem where time and attention
              are rewarded.
            </li>
          </ul>
        </section>
        <hr />

        <section>
          <h3 className="font-bold text-lg">The Vision of $CLAN Coins</h3>
          <p className="text-sm text-zinc-900 leading-6">
            $CLAN is more than just an in-app currency. It’s built to become a
            real cryptocurrency backed by ad revenue. This ensures that the coin
            has genuine, stable value. Users will be able to:
          </p>
          <ul className="text-sm text-zinc-900 leading-6 list-disc list-inside space-y-1">
            <li>
              Use $CLAN to purchase items and access premium features in the
              app.
            </li>
            <li>Convert $CLAN to other cryptocurrencies.</li>
            <li>
              Benefit from a burn-and-earn model where coins are periodically
              burned to preserve value.
            </li>
          </ul>
          <p className=" text-sm mt-3">
            Ads will contribute to over 60% of $CLAN’s value structure, meaning
            your attention is directly tied to the coin’s strength.
          </p>
        </section>

        <hr />
        <h3 className="font-semibold  text-base mb-2 ">
          A Fair Reward System for All
        </h3>
        <p className="text-sm text-zinc-900 leading-6">
          We’ve designed Clan Circle to reward effort and consistency. The more
          active you are—clicking, checking in, sharing, watching ads—the more
          you earn. Everyone gets rewarded fairly based on what they contribute.
          No user is left out. Every active member earns. That’s our promise.
        </p>

        <hr />

        {/* Earn Coins */}
        <section>
          <h3 className="font-semibold text-base mt-4">How to Earn Coins</h3>
          <ul className="text-sm text-zinc-900 leading-6 list-disc list-inside space-y-1">
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

        <div className="mt-4 sm:mt-4">
          <h3 className="font-semibold text-base mb-2">
            Final Words: We Rise Together
          </h3>
          <p className="text-sm text-zinc-900 leading-6">
            Clan Circle is more than just an app. It’s a movement to
            redistribute digital wealth, empower under-supported creators, and
            reward fans for the value they’ve always brought. Whether you’re a
            content creator, social media lover, or just someone who scrolls a
            lot—we’re bringing the opportunity to your fingertips. Welcome to
            Clan Circle. Less talk. More action. More value. Together.
          </p>
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
