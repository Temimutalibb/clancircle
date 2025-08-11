"use client"; // Needed if using App Router for client interactivity

import Link from "next/link";
import { useState } from "react";

export default function WithdrawForm() {
  const [wallet, setWallet] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Trim spaces from wallet address
    const trimmedWallet = wallet?.trim();

    // Wallet validation
    if (!trimmedWallet || !/^0x[a-fA-F0-9]{10,}$/.test(trimmedWallet)) {
      setError(
        "Please enter a valid wallet address starting with 0x and at least 10 characters long."
      );
      return;
    }

    try {
      const res = await fetch("https://clnctestnet.vercel.app/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 100, // Frontend sends normal value
          recipient: trimmedWallet,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setError(`✅ Withdrawal successful! Tx Hash: ${data.txHash}`);
      } else {
        setError(`❌ Error: ${data.error || "Unknown error"}`);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`❌ Withdrawal failed. Please try again. ${err.message}`);
      } else {
        setError("❌ Withdrawal failed. Unknown error occurred.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-8 flex flex-col items-center">
      {/* CTA Banner */}
      <div className="max-w-3xl w-full bg-pink-600 bg-opacity-90 rounded-lg p-5 text-center mb-9 shadow-lg">
        <h2 className="text-xl font-bold mb-2">
          Want to earn <span className="text-yellow-300">real $CLNC coins</span>
          ?
        </h2>
        <p className="mb-4">
          Download our Android app now and start earning real tokens by engaging
          with the community!
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.mutalibb.clancircle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Download Android App
        </a>
      </div>

      <section className="max-w-3xl bg-indigo-800 bg-opacity-80 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-400">
          Participate in Our $CLNC Testnet!
        </h1>
        <p className="mb-4 text-gray-300">
          To participate in testing our $CLNC token on Sui Testnet, please
          follow these steps:
        </p>
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-200">
          <li>Install the Slush Wallet extension or app.</li>
          <li>
            Switch your network to <strong>Testnet</strong> in Slush Wallet.
          </li>
          <li>
            Copy your wallet address (starts with <code>0x</code>).
          </li>
          <li>Paste your wallet address in the form below.</li>
          <li>
            You will receive a fixed amount of <strong>100 $CLNC coins</strong>{" "}
            to test transactions.
          </li>
          <li>
            Return back to{" "}
            <Link className="text-pink-500 hover:text-pink-600" href="/">
              homepage
            </Link>{" "}
            to give feedback
          </li>
        </ol>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="wallet"
              className="block text-gray-300 font-semibold"
            >
              Your Wallet Address
            </label>
            <input
              id="wallet"
              type="text"
              placeholder="0x..."
              value={wallet}
              onChange={(e) => setWallet(e.target.value.trim())}
              className="w-full p-3 rounded-md text-black font-mono"
              required
            />
            {error && <p className="text-red-400">{error}</p>}

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300 py-3 rounded-md font-semibold"
            >
              Submit Wallet Address
            </button>
          </form>
        ) : (
          <div className="text-center text-green-400 font-semibold text-lg">
            Thanks for participating! Your wallet has been registered to receive
            100 $CLNC coins for testing.
          </div>
        )}
      </section>
    </main>
  );
}
