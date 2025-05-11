import Image from "next/image";
export default function How() {
  return (
    <>
      <div>
        {/*web view*/}
        <div className="  hidden sm:block">
          <div className="p-5   mb-10 text-center">
            <span className="font-bold"> Sign up</span>
            to get a sign up reward bonus and an extra bonus if you use a
            referral code.
          </div>

          <div className=" w-[1200] items-center m-auto justify-center">
            <div className="flex">
              <div className="flex flex-col gap-10 p-10">
                <div className="mt-10 leading-loose tracking-[1px] ">
                  <span className="font-bold ">My circle.</span>
                  View your circle or start a new one. Build
                  <span className="font-bold">
                    {" "}
                    your own personal community
                  </span>
                </div>
                <div className="leading-loose tracking-[1px] ">
                  <span className="font-bold">Fast link.</span>
                  Explore and filter the content you want.
                  <span className="font-bold">
                    Every click on a link earns you coins.
                  </span>
                </div>
                <div className="leading-loose tracking-[1px] ">
                  <span className="font-bold">Referral.</span>
                  Copy and share your referral code. You earn coins for each
                  user who joins with your code,
                  <span className="font-bold">plus a 6% bonus </span>on all the
                  coins they earn — without affecting their own rewards.
                </div>
              </div>
              <div className="w-[1200] h-[600]">
                <Image
                  src="/howone.jpg"
                  alt="Clan Circle logo"
                  width={1200}
                  height={600}
                  priority
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-10 p-10 pt-0">
                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold">Activities</span>
                  Tap the notification icon to view all your activities.
                  <span className="font-bold">
                    Tap the language icon to translate into your chosen
                    language.
                  </span>
                </div>
                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold">Check in</span> every 15 minutes
                  to earn coins and ad points
                  <span className="font-bold">
                    —your gateway to owning crypto.
                  </span>
                </div>
                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold">Following.</span>
                  View the circles you follow, unfollow easily, check the
                  owner’s profile, and more. Enter a circle to see its content.
                  <span className="font-bold">
                    Clicking on content earns coins for you and the circle
                    owner.
                  </span>
                </div>

                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold ">Explore.</span>
                  Follow circles of your choice.
                  <span className="font-bold">
                    The more circles you follow, the more links to click and the
                    more coins to earn.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  m-2 gap-1 mt-20 relative items-center justify-center">
            {/* First Image */}
            <div>
              <div className="text-center p-1">Create a circle</div>
              <Image
                src="/create.jpg"
                alt="Clan Circle logo"
                width={1200}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="mb-[10%]">
              <div className="text-center  p-1">
                in app interaction with content
              </div>
              <Image
                src="/inapp.jpg"
                alt="Clan Circle logo"
                width={1200}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {/* Third Image */}
            <div className="mb-[20%]">
              <div className="text-center  p-1">Explore circle</div>
              <Image
                src="/explore.jpg"
                alt="Clan Circle logo"
                width={1200}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {/* Fourth Image */}
            <div className="mb-[30%]">
              <div className="text-center  p-1">see you coins growing</div>
              <Image
                src="/wallet.jpg"
                alt="Clan Circle logo"
                width={1200}
                height={500}
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center p-5">
            We never stop growing as a community, integrating more features to
            our ecosystem. Be part of revolution
          </div>
        </div>
        {/*mobile view*/}
        <div className="  block sm:hidden">
          <div className="p-5  text-center">
            <span className="font-bold"> Sign up</span>
            to get a sign up reward bonus and an extra bonus if you use a
            referral code.
          </div>

          <div className="items-center m-auto justify-center">
            <div className="flex flex-col">
              <div className="flex flex-col gap-10 p-10">
                <div className="mt-10 leading-loose tracking-[1px] ">
                  <span className="font-bold ">My circle.</span>
                  View your circle or start a new one. Build
                  <span className="font-bold">your own personal community</span>
                </div>
                <div className="leading-loose tracking-[1px] ">
                  <span className="font-bold">Fast link.</span>
                  Explore and filter the content you want.
                  <span className="font-bold">
                    Every click on a link earns you coins.
                  </span>
                </div>
                <div className="leading-loose tracking-[1px] ">
                  <span className="font-bold">Referral.</span>
                  Copy and share your referral code. You earn coins for each
                  user who joins with your code,
                  <span className="font-bold">plus a 6% bonus </span>on all the
                  coins they earn — without affecting their own rewards.
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/howone.jpg"
                  alt="Clan Circle logo"
                  width={1200}
                  height={600}
                  priority
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-10 p-10 pt-0">
                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold">Activities</span>
                  Tap the notification icon to view all your activities.
                  <span className="font-bold">
                    Tap the language icon to translate into your chosen
                    language.
                  </span>
                </div>
                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold">Check in</span> every 15 minutes
                  to earn coins and ad points
                  <span className="font-bold">
                    —your gateway to owning crypto.
                  </span>
                </div>
                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold">Following.</span>
                  View the circles you follow, unfollow easily, check the
                  owner’s profile, and more. Enter a circle to see its content.
                  <span className="font-bold">
                    Clicking on content earns coins for you and the circle
                    owner.
                  </span>
                </div>

                <div className="leading-loose tracking-[1px]">
                  <span className="font-bold ">Explore.</span>
                  Follow circles of your choice.
                  <span className="font-bold">
                    The more circles you follow, the more links to click and the
                    more coins to earn.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  m-2 gap-1 mt-20 relative items-center justify-center">
            {/* First Image */}
            <div className="p-5">
              <div className="text-center p-1">Create a circle</div>
              <Image
                src="/create.jpg"
                alt="Clan Circle logo"
                width={500}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="p-5">
              <div className="text-center  p-1">
                in app interaction with content
              </div>
              <Image
                src="/inapp.jpg"
                alt="Clan Circle logo"
                width={500}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {/* Third Image */}
            <div className="p-5">
              <div className="text-center  p-1">Explore circle</div>
              <Image
                src="/explore.jpg"
                alt="Clan Circle logo"
                width={500}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {/* Fourth Image */}
            <div className="p-5">
              <div className="text-center  p-1">see you coins growing</div>
              <Image
                src="/wallet.jpg"
                alt="Clan Circle logo"
                width={500}
                height={500}
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center p-5">
            We never stop growing as a community, integrating more features to
            our ecosystem. Be part of revolution
          </div>
        </div>
      </div>
    </>
  );
}
