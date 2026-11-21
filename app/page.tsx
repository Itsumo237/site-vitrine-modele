export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Votre site commence ici
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Ouvrez la conversation avec Claude et suivez le chapitre 7 du guide.
        </p>
        <p className="mt-8 text-sm text-muted">
          Fichier à modifier :{" "}
          <code className="rounded border border-border bg-surface px-2 py-1 font-mono text-foreground">
            app/page.tsx
          </code>
        </p>
      </div>
    </main>
  );
}
