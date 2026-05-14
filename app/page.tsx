export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Social Media Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Detect Fake Engagement on Social Platforms
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze voting patterns, timing, and user behavior to expose self-voting bots and coordinated fake engagement — before they game your platform.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔍", title: "Pattern Analysis", desc: "Detect suspicious voting clusters and sequential bot-like votes in real time." },
          { icon: "⏱", title: "Timing Detection", desc: "Flag rapid sequential votes that no human could produce naturally." },
          { icon: "🤖", title: "ML-Powered", desc: "Machine learning models trained on known bot behavior across platforms." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need to protect your platform</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited API calls",
              "Real-time bot detection",
              "Voting pattern reports",
              "Multi-platform support",
              "Email alerts",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the bot detection work?",
              a: "Our API analyzes voting timestamps, user IDs, IP clusters, and behavioral patterns using ML models trained on known bot activity to produce a suspicion score for each vote or user."
            },
            {
              q: "Which platforms are supported?",
              a: "Any platform that can send vote events via HTTP. We provide a simple REST API — integrate it with Reddit, Hacker News clones, forums, or any custom voting system."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Self-Voting Bot Detector. All rights reserved.
      </footer>
    </main>
  );
}
