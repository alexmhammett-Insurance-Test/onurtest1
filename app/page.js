import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-6 py-12 text-white">
      <div className="w-full max-w-sm rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-3xl font-bold text-zinc-950 shadow-lg shadow-emerald-500/20">
          O
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight">
          Welcome, client
        </h1>
        <p className="mb-8 text-base leading-relaxed text-zinc-300">
          Your personal training journey starts here. Choose an option below to
          get started.
        </p>

        <nav className="flex flex-col gap-4">
          <Link
            href="/parq"
            className="flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02] hover:bg-emerald-400 active:scale-[0.98]"
          >
            Start PAR-Q
          </Link>
          <Link
            href="/how-does-this-machine-work"
            className="flex w-full items-center justify-center rounded-2xl bg-white/10 px-6 py-4 text-base font-semibold text-white ring-1 ring-white/10 transition hover:scale-[1.02] hover:bg-white/15 active:scale-[0.98]"
          >
            How does this machine work
          </Link>
        </nav>

        <p className="mt-6 text-center text-sm text-zinc-400">
          New content added regularly.
        </p>
      </div>
    </main>
  );
}
