import Link from "next/link";

function WhitePaper() {
  return (
    <>
      <div className="w-[80%] mx-auto text-gray-900">
        <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 m-4  space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-blue-400 rounded-full absolute -right-5 -top-7">
            <div className="absolute bottom-6 left-7 text-white text-2xl">
              {"clan"}
            </div>
          </div>
          <div className=" text-violet-400 text-sm ">{"white paper"}</div>
          <h1 className="font-bold text-xl">{"Click to Earn Ecosystem"}</h1>
          <div className="text-sm text-zinc-500 leading-6">
            Clan Circle is a community platform that that helps user to get more
            interaction on their content and helps to maximized profit. We
            ratinalized profit bewtween the users(both content creators and
            users interacting with them). with our in-app promote systems we
            also help users or advertizers to meet their target audience. Our
            goal is to let all users make money using the net, doing what they
            love.
          </div>
          <h2 className="font-bold text-xl">1.Introduction</h2>
          <div className="text-sm text-zinc-500 leading-6">
            In todays digital age, maximizing social media engagement and profit
            has never been more achievable. Clan Circle aims to revolutionize
            social media interaction by distributing wealth among all users,
            fostering a community where everyone grows together. Our platform
            helps users increase interaction on their social media content, gain
            more visibility, and maximize profit, all while doing what they
            love.
          </div>
          <h2 className="font-bold text-l">1.1 Executive Summary</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Clan Circle is a blockchain-powered platform designed to empower
            internet users by converting social media engagement into tangible
            rewards. By sharing social media links within “Circles,” users earn
            $CLAN tokens with every click. This unique ecosystem not only boosts
            engagement but also guarantees monetization even when traditional
            social platforms fall short. Revenue from in-app advertisements is
            converted to OCASH (pegged to 1 USDT), with a portion used to buy
            and burn $CLAN tokens—helping to control inflation—while the
            remainder is reinvested in the platform and distributed among users,
            investors, and for app maintenance.
          </div>

          <h2 className="font-bold text-xl">2. Problem Statement</h2>
          <h2 className="font-bold text-l">
            2.1 The Engagement & Monetization Gap
          </h2>
          <div className="text-sm text-zinc-500 leading-6">
            Many social media platforms reward content creators based on
            engagement, but not all users qualify for monetization.
            Additionally, many struggle with low engagement on their posts,
            reducing their earning potential.{" "}
            <b>
              Circle solves this by ensuring users can earn rewards ($CLAN) for
              engagement, whether or not their social media platform pays them.
            </b>
          </div>

          <h2 className="font-bold text-xl">3. The Solution</h2>
          <h2 className="font-bold text-l">3.1 How Circle Works</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ol>
              <li>
                <b>Users copy their social media post link</b> (from platforms
                like Facebook, Twitter, etc.).
              </li>
              <li>
                <b>They paste the link into a Circle</b>, a user-created or
                public space where others can discover it.
              </li>
              <li>
                <b>Other users click the link</b>, which redirects them to the
                content.
              </li>
              <li>
                <b>Each click generates $CLAN</b>, rewarding engagement and
                interaction.
              </li>
            </ol>
          </div>
          <h2 className="font-bold text-l">3.2 Revenue Model & OCASH System</h2>
          <div className="text-sm text-zinc-500 leading-6">
            - The platform displays ads to generate revenue. - At the end of
            each month, ad revenue is converted to{" "}
            <b>OCASH (1 OCASH = 1 USDT).</b> -
            <b>50% of OCASH is used to buy and burn $CLAN</b> (reducing supply
            and increasing value). - The remaining OCASH is distributed among
            <b>users, investors, and for platform maintenance.</b>
          </div>

          <h2 className="font-bold text-xl">
            4.Market Analysis & Competitive Landscape
          </h2>
          <h2 className="font-bold text-l">4.1 Market Opportunity</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                Social media monetization is growing, but many users struggle to
                earn from engagement.
              </li>
              <li>
                Blockchain-based reward systems are gaining traction, with
                projects like Brave’s BAT proving the viability of
                user-generated ad revenue models.{" "}
              </li>
              <li>
                Circle leverages this demand by creating a decentralized, fair,
                and transparent way for users to earn from social interactions.
              </li>
            </ul>
          </div>
          <h2 className="font-bold text-l">4.2 Competitive Advantage</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                Unlike platforms like Steemit and BAT, Circle does not require
                content creation—just engagement.
              </li>
              <li>
                The automated
                <b>click-to-earn</b>
                model ensures passive monetization without additional user
                effort.
              </li>
              <li>
                Built-in <b>ad revenue and token burning </b> mechanisms create
                long-term sustainability.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">5.Tokenomics</h2>
          <h2 className="font-bold text-l">5.1Token Utility</h2>
          <div className="text-sm text-zinc-500 leading-6">
            $CLAN serves multiple purposes within the ecosystem:
            <ul>
              <li>
                <b>Rewards for Engagement-</b> Users earn $CLAN when their links
                receive clicks.
              </li>
              <li>
                <b>Premium Services –</b> Users can spend $CLAN to:
                <ul>
                  <li> Create more than three Circles.</li>
                  <li>
                    Pin more than three links (normal links expire in 24 hours).
                  </li>
                  <li> Promote their links via in-app ads.</li>
                </ul>
              </li>
              <li></li>
              <li>
                <b>Burn Mechanism-</b>A portion of ad revenue is used to buy and
                burn $CLAN, controlling inflation.
              </li>
            </ul>
          </div>
          <h2 className="font-bold text-l">5.2 Blockchain & Smart Contract</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                <b>Blockchain:</b> Binance Smart Chain (BEP-20) for low fees and
                fast transactions.
              </li>
              <li>
                <b>Supply:</b>
                Unlimited, but regulated through controlled burns.{" "}
              </li>
              <li>
                <b>Distribution:</b>

                <ul>
                  <li>
                    <b>Airdrops & Rewards:</b> 40%{" "}
                  </li>
                  <li>
                    <b>Investor Allocation:</b> 30%{" "}
                  </li>
                  <li>
                    <b>Marketing & Development:</b> 20%{" "}
                  </li>
                  <li>
                    <b>Team & Advisors:</b> 10%
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">6. Security & Audits</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                <b>Clan Circle will undergo </b>third-party smart contract
                audits* to ensure security.
              </li>
              <li>
                Regular <b>penetration testing</b> will be conducted to prevent
                exploits.
              </li>
              <li>
                <b>Multi-signature wallets</b> will be used for treasury and
                investor funds.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">
            7. Legal & Regulatory Considerations*
          </h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                Compliance with <b>Binance Smart Chain guidelines.</b>
              </li>
              <li>
                Ongoing legal review to ensure adherence to{" "}
                <b>*global cryptocurrency regulations.</b>
              </li>
              <li>
                $CLAN will not be a security token but rather a{" "}
                <b>utility token</b> for transactions within the platform.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">8. Investor Strategy & ICO</h2>
          <h2 className="font-bold text-l">8.1 Fundraising Strategy</h2>
          <div className="text-sm text-zinc-500 leading-6">
            To support platform development and adoption,Clan Circle will launch
            an
            <b>Initial Coin Offering (ICO): </b>
            <ul>
              <li>
                <b>Private Sale:</b> Early-stage investors get discounted $CLAN.
              </li>
              <li>
                <b>Public Sale:</b> Open to all users at a set price before
                exchange listing.
              </li>
              <li>
                Funds raised will support
                <b>marketing, liquidity, and platform expansion.</b>
              </li>
            </ul>
          </div>
          <h2 className="font-bold text-l">8.2 Exchange Listing Plan</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ol>
              <li>
                <b>Launch on DEX (Decentralized Exchange)</b> – PancakeSwap for
                initial liquidity.
              </li>
              <li>
                <b> Expand to CEX (Centralized Exchange)</b>– Binance, KuCoin,
                or Gate.io once demand grows.
              </li>
            </ol>
          </div>

          <h2 className="font-bold text-xl">
            9. Marketing & Community Strategy
          </h2>

          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                <b>Airdrop Campaigns</b> to onboard early adopters.
              </li>
              <li>
                <b>Referral Bonuses</b> for users who bring new participants.
              </li>
              <li>
                <b>Strategic Partnerships</b> with social media influencers and
                ad networks.
              </li>
              <li>
                <b>Bounty Programs</b> to encourage developers and marketers to
                contribute.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">10. Risk Factors</h2>
          <h2 className="font-bold text-l">10.1 Market Risks</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li> Cryptocurrency volatility could affect token value.</li>
              <li>Increased regulation could impact the token’s operations.</li>
            </ul>
          </div>

          <h2 className="font-bold text-l">10.2 Technical Risks</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>Blockchain congestion might delay transactions.</li>
              <li>
                Potential vulnerabilities in smart contracts require ongoing
                security audits.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-l">10.3 Adoption Risks</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                User adoption depends on effective marketing and onboarding.
              </li>
              <li>
                Competition from other blockchain-based engagement models.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">11. Roadmap</h2>
          <h2 className="font-bold text-l">11.1 Development Phases</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                <b>Q2 2025:</b> Smart contract deployment & beta testing.
              </li>
              <li>
                <b>Q3 2025:</b>
                ICO launch & DEX listing.
              </li>
              <li>
                <b> Q4 2025:</b> Ad system integration & user acquisition.
              </li>
              <li>
                <b>2026:</b> CEX listing & global expansion.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">13. Conclusion</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Clan Circle is redefining social media engagement by ensuring every
            user benefits from interactions. With a sustainable tokenomics
            model, an active burn mechanism, and an investor-friendly ICO, $CLAN
            presents a compelling opportunity for both users and investors
            alike.
          </div>
          <h2 className="font-bold text-xl">Contact & Socials</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <Link href={"/"}>contacts here</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhitePaper;
