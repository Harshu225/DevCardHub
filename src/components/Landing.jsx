import React from "react";

const Landing = () => {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1447210280/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.jpg?s=612x612&w=0&k=20&c=jACLnabqucocxu0TIMn3MZQkXDPC14J-j2yy8vzcJXY="
          alt="Developer working at a laptop"
          className="absolute inset-0 -z-20 h-full w-full object-contain object-center"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/75" />
        <div className="absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-3xl" />

        <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              The professional directory for modern teams
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              Find the people who move great work forward.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              CodeNextPro brings talented developers, analysts, leaders, and
              builders into one focused space, so the right connection is only a
              conversation away.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#directory"
                className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-white"
              >
                Explore the directory
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Learn more
              </a>
            </div>
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-6 text-sm text-slate-300">
              <span>
                <strong className="text-2xl text-white">07</strong> featured
                profiles
              </span>
              <span>
                <strong className="text-2xl text-white">06</strong> specialties
              </span>
              <span>
                <strong className="text-2xl text-white">01</strong> shared
                network
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Built for connection
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            A clearer way to discover your next collaborator.
          </h2>
          <p className="max-w-md leading-7 text-slate-400">
            Browse a curated collection of people and see what they do at a
            glance.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Landing;
