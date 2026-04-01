import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ink-2"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Quote */}
          <FadeIn>
            <div>
              <blockquote className="mb-8">
                <p className="text-2xl sm:text-3xl font-fraunces italic font-black text-cream leading-tight">
                  "We don't build websites to look pretty—we build them to
                  bring people through your door."
                </p>
              </blockquote>
              <p className="text-mid leading-relaxed mb-6">
                Every design decision, every feature, every line of code serves
                one purpose: getting your customers to take action.
              </p>
              <p className="text-mid leading-relaxed">
                We understand the pressures of running a local business. That's
                why we focus on strategy first, design second, and conversion
                always.
              </p>
            </div>
          </FadeIn>

          {/* Right Column - Feature Cards */}
          <FadeIn>
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="p-6 bg-ink-3 rounded-lg border border-border-2 hover:border-fire/50 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-fire/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-fire text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-fraunces italic font-black text-cream text-lg mb-2">
                      Strategy First
                    </h3>
                    <p className="text-muted text-sm">
                      We start with your business goals, not design trends. What
                      do you want customers to do?
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-ink-3 rounded-lg border border-border-2 hover:border-fire/50 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-fire/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-fire text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-fraunces italic font-black text-cream text-lg mb-2">
                      Built for Real Business
                    </h3>
                    <p className="text-muted text-sm">
                      No overengineered features or unnecessary complexity. Fast,
                      secure, and built to scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-ink-3 rounded-lg border border-border-2 hover:border-fire/50 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-fire/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-fire text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-fraunces italic font-black text-cream text-lg mb-2">
                      Local Focus
                    </h3>
                    <p className="text-muted text-sm">
                      You're not a number. We're in Mesa, we get the local
                      market, and we're invested in your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
