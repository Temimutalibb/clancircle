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
            rationalized profit bewtween the users(both content creators and
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
            Clan Circle is a blockchain-powered platform that rewards users for
            meaningful online engagement. Users can earn $CLNC tokens each time
            they take part in activities like clicking links, when links in
            their personal Circle are clicked, completing daily tasks, checking
            in, or using integrated services like BlogIT or InkNFT. A portion of
            in-app ad revenue is used to acquire $CLNC, which is then
            distributed to users based on their activity. This ensures a fair
            reward system while supporting continuous platform growth and
            maintenance.
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
                <b>Each click generates $CLNC</b>, rewarding engagement and
                interaction.
              </li>
            </ol>
          </div>
          <h2 className="font-bold text-l">3.2 Revenue Model</h2>
          <div className="text-sm text-zinc-500 leading-6">
            -The platform displays ads to generate revenue. Users earn coins by
            engaging with the platform. At the end of each month, total ad
            revenue is calculated, and <b>$CLNC</b> tokens are distributed to
            users based on the number of coins they’ve earned. A portion of the
            revenue is also used to buy and burn $CLNC tokens, helping reduce
            supply and increase value. The rest is allocated for{" "}
            <b>investors and platform maintenance.</b>
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
                Clan Circle leverages this demand by creating a decentralized,
                fair, and transparent way for users to earn from social
                interactions.
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl">5.Tokenomics</h2>
          <h2 className="font-bold text-l">5.1Token Utility</h2>
          <div className="text-sm text-zinc-500 leading-6">
            $CLNC serves multiple purposes within the ecosystem:
            <ul>
              <li>
                <b>Rewards for Engagement-</b> Users earn $CLNC by clicking
                links and participating in various activities within the app.
              </li>
              <li>
                <b>Premium Services –</b> Users can spend $CLNC to:
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
                burn $CLNC, controlling inflation.
              </li>
            </ul>
          </div>
          <h2 className="font-bold text-l">5.2 Blockchain & Smart Contract</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                <b>Blockchain:</b> We are currently exploring different
                blockchain platforms to select the best option that offers low
                fees, high throughput, and fast transaction speeds, ensuring an
                optimal user experience.
              </li>
              <li>
                <b>Supply:</b>
                Unlimited total supply, with an initial fixed amount released to
                users. Additional tokens are minted and distributed over time,
                regulated by controlled burns to maintain value.
              </li>
              <li>
                <b>Distribution:</b>

                <ul>
                  <li>
                    <b>Airdrops & Rewards:</b> 20%{" "}
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
                Ongoing legal review to ensure adherence to{" "}
                <b>*global cryptocurrency regulations.</b>
              </li>
              <li>
                $CLNC will not be a security token but rather a{" "}
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
                <b> marketing, liquidity, and platform expansion.</b>
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
                <b>Q3 2025:</b> Smart contract deployment & beta testing.
              </li>
              <li>
                <b>Q4 2025:</b>
                DEX listing.
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
            model, an active burn mechanism, and an investor-friendly ICO, $CLNC
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
