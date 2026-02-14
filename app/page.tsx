export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold tracking-tight">AI Magazine</h1>
              <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Research</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Industry</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Products</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Analysis</a>
              </div>
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 tracking-wide">
              FEBRUARY 2026
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Article */}
            <article className="lg:col-span-8 group">
              <div className="aspect-[16/9] bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-sm mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="space-y-3">
                <span className="inline-block px-2 py-1 text-xs font-medium tracking-wider text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950 rounded-sm">
                  FEATURED
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  The New Frontier: How Multimodal AI is Reshaping Creative Work
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                  Deep dive into the latest breakthroughs in text-to-video, image generation, and the future of human-AI collaboration in creative industries.
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                  <span>By Sarah Chen</span>
                  <span>·</span>
                  <span>8 min read</span>
                  <span>·</span>
                  <span>Feb 14, 2026</span>
                </div>
              </div>
            </article>

            {/* Side Stories */}
            <div className="lg:col-span-4 space-y-8">
              <article className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500 to-teal-500 rounded-sm mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <span className="inline-block px-2 py-1 text-xs font-medium tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 rounded-sm mb-2">
                  RESEARCH
                </span>
                <h3 className="text-xl font-bold leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                  GPT-5 Rumors: What We Know So Far
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  Early reports suggest significant improvements in reasoning and multimodal capabilities.
                </p>
              </article>

              <article className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-500 to-red-500 rounded-sm mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <span className="inline-block px-2 py-1 text-xs font-medium tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950 rounded-sm mb-2">
                  PRODUCTS
                </span>
                <h3 className="text-xl font-bold leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
                  Claude 4.0 Launches With Agent Capabilities
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  Anthropic's latest release brings autonomous task execution to the mainstream.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-12" />

        {/* Latest Stories Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "INDUSTRY",
                color: "blue",
                title: "OpenAI Partners With Major Publishers for Content Licensing",
                excerpt: "A landmark deal that could reshape how AI companies access copyrighted content.",
                author: "Michael Torres",
                readTime: "5 min"
              },
              {
                category: "ANALYSIS",
                color: "pink",
                title: "The AI Talent War: Salaries Skyrocket at Top Firms",
                excerpt: "Why top ML engineers are now commanding million-dollar compensation packages.",
                author: "Emma Wilson",
                readTime: "6 min"
              },
              {
                category: "RESEARCH",
                color: "indigo",
                title: "New Paper Shows Progress in AI Safety Alignment",
                excerpt: "Researchers demonstrate techniques that reduce harmful outputs by 40%.",
                author: "Dr. James Park",
                readTime: "7 min"
              },
              {
                category: "PRODUCTS",
                color: "yellow",
                title: "Runway Gen-3: Video Generation Takes Another Leap",
                excerpt: "The latest update brings unprecedented consistency and control to AI video.",
                author: "Lisa Zhang",
                readTime: "4 min"
              },
              {
                category: "INDUSTRY",
                color: "cyan",
                title: "EU AI Act: What Businesses Need to Know",
                excerpt: "Comprehensive guide to compliance requirements for the new regulation.",
                author: "David Müller",
                readTime: "8 min"
              },
              {
                category: "RESEARCH",
                color: "rose",
                title: "Meta Releases Open Weights for New Language Model",
                excerpt: "The company continues its commitment to open source AI development.",
                author: "Rachel Kim",
                readTime: "5 min"
              }
            ].map((story, i) => (
              <article key={i} className="group cursor-pointer">
                <div className={`aspect-[4/3] bg-gradient-to-br from-${story.color}-500 to-${story.color === 'yellow' ? 'amber' : story.color === 'pink' ? 'fuchsia' : story.color}-600 rounded-sm mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <span className={`inline-block px-2 py-1 text-xs font-medium tracking-wider text-${story.color}-600 dark:text-${story.color}-400 bg-${story.color}-50 dark:bg-${story.color}-950 rounded-sm mb-2`}>
                  {story.category}
                </span>
                <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                  {story.excerpt}
                </p>
                <div className="text-xs text-zinc-500 dark:text-zinc-500">
                  {story.author} · {story.readTime} read
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 mb-12">
          <div className="bg-zinc-900 dark:bg-zinc-900 rounded-sm p-8 sm:p-12">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-3">Stay Ahead of AI</h3>
              <p className="text-zinc-400 mb-6">
                Get the latest AI news, research, and analysis delivered to your inbox every week.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2026 AI Magazine. Curated for the curious.
            </div>
            <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
