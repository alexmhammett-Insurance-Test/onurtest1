import Link from "next/link";

export default function HowDoesThisMachineWork() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-6 py-12 text-white">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm text-zinc-400 hover:text-white"
        >
          ← Back
        </Link>

        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          How does this machine work?
        </h1>
        <p className="mb-8 text-zinc-300">Bench press walkthrough</p>

        <div className="relative mb-10 h-64 w-full overflow-hidden rounded-3xl bg-zinc-900/50 ring-1 ring-white/10">
          {/* Rack */}
          <div className="absolute bottom-4 left-8 h-44 w-2 rounded bg-zinc-600" />
          <div className="absolute bottom-4 right-8 h-44 w-2 rounded bg-zinc-600" />

          {/* Bench */}
          <div className="absolute bottom-8 left-1/2 h-4 w-40 -translate-x-1/2 rounded-lg bg-zinc-500" />
          <div className="absolute bottom-12 left-1/2 h-8 w-44 -translate-x-1/2 rounded-t-xl bg-zinc-400" />

          {/* Animated barbell */}
          <div className="bench-press-bar absolute left-1/2 top-10 flex w-64 items-center justify-between">
            <div className="h-8 w-8 rounded-full bg-zinc-300 ring-4 ring-zinc-400" />
            <div className="h-2 flex-1 rounded bg-zinc-300" />
            <div className="h-8 w-8 rounded-full bg-zinc-300 ring-4 ring-zinc-400" />
          </div>
        </div>

        <ol className="mb-8 list-decimal space-y-3 pl-5 text-zinc-300">
          <li>Lie flat on the bench with your eyes under the bar.</li>
          <li>Grip the bar just wider than shoulder-width apart.</li>
          <li>Lower the bar to your mid-chest with control.</li>
          <li>Press the bar straight back up to the starting position.</li>
        </ol>
      </div>
    </main>
  );
}
