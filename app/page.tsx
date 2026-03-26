import Image from "next/image";

const services = [
  "Brand Identity",
  "Website Design",
  "Web Development",
  "Growth Strategy",
];

const businessBackground =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=80";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 -z-1">
        <Image
          src={businessBackground}
          alt=""
          fill
          className="object-cover object-center opacity-35 saturate-90"
          priority
        />
      </div>
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_20%,rgba(255,50,50,0.38),transparent_45%),radial-gradient(circle_at_78%_72%,rgba(130,0,0,0.42),transparent_52%),linear-gradient(160deg,#190000_0%,#090909_65%,#100000_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-size-[52px_52px] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
      <div className="animate-float-slow absolute opacity-90  -left-16 top-10 h-72 w-72 rounded-full bg-[#ff3434]/35 blur-[120px]" />
      <div className="animate-float-slow absolute opacity-90  -right-20 bottom-0 h-80 w-80 rounded-full bg-[#8f0000]/40 blur-[130px]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-4xl p-2 sm:p-4 lg:p-6">
          <div className="space-y-7">
            <div className="animate-fade-up flex w-full">
              <Image
                src="/logo.png"
                alt="Devlix logo"
                width={320}
                height={320}
                className="h-auto w-32 drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] sm:w-40"
                priority
              />
            </div>

            <span className="animate-fade-up inline-flex w-fit items-center rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/85">
              Rabat, Morocco | Digital Agency
            </span>

            <div className="space-y-4">
              <h1 className="animate-fade-up delay-120 font-brand text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Devlix is building
                <span className="block bg-gradient-to-r from-[#ffffff] via-[#ffd6d6] to-[#ff4a4a] bg-clip-text text-transparent">
                  something exceptional.
                </span>
              </h1>
              <p className="animate-fade-up delay-220 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Our official experience is launching soon. We craft premium
                digital products, brand systems, and high-performing web
                platforms for ambitious businesses.
              </p>
            </div>

            <div className="animate-fade-up delay-320 flex flex-wrap gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-red-200/35 bg-red-600/15 px-4 py-2 text-sm font-medium text-red-50"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="animate-fade-up delay-420 flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:contact@devlix.digital"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#7a0000] transition hover:bg-[#ffe8e8]"
              >
                Start a Project
              </a>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-5 py-3 text-sm text-white/75">
                Site Launching Soon
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs uppercase tracking-[0.2em] text-white/60 sm:text-left">
            Devlix | Rabat, Morocco | Digital Agency
          </div>
        </div>
      </section>
    </main>
  );
}
