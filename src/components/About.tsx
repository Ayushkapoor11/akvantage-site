import FadeIn from "./FadeIn";

const pillars = [
  { num: "01", title: "Strategy First", body: "We start with your business goals, not design trends. What do you want customers to do?" },
  { num: "02", title: "Built for Real Business", body: "No overengineered features or unnecessary complexity. Fast, secure, and built to scale." },
  { num: "03", title: "Local Focus", body: "You're not a number. We're in Mesa, we get the local market, and we're invested in your success." },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/[0.08] scroll-mt-20">
      <div className="max-w-screen-xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/35 font-outfit">About</span>
            <div className="flex-1 border-t border-cream/[0.08]" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <FadeIn>
            <blockquote className="font-fraunces italic font-bold text-cream leading-snug mb-8" style={{ fontSize: "clamp(20px, 2.6vw, 36px)" }}>
              "We don't build websites to look pretty—we build them to bring people through your door."
            </blockquote>
            <p className="text-[15px] text-mid font-light leading-relaxed max-w-md font-outfit">
              Every design decision, every feature, every line of code serves one purpose: getting your customers to take action. We understand the pressures of running a local business. That's why we focus on strategy first, design second, and conversion always.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col">
              {pillars.map((p, i) => (
                <div key={i} className={`py-7 ${i < pillars.length - 1 ? "border-b border-cream/[0.08]" : ""}`}>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="font-bebas text-[13px] text-fire tracking-widest">{p.num}</span>
                    <span className="font-fraunces italic font-bold text-lg text-cream">{p.title}</span>
                  </div>
                  <p className="text-sm text-mid font-light leading-relaxed pl-7 font-outfit">{p.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
