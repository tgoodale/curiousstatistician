// Pre-render for site/: on a full render, remove the combined ../_site/ first.
// Quarto won't clean an output-dir outside the project, so without this a
// re-render warns and leaves stale files. The site renders first, then courses
// and books render into _site/, so clearing it here is safe. Incremental
// renders (quarto preview) don't set QUARTO_PROJECT_RENDER_ALL and are skipped.
// Run by Quarto's bundled Deno, so it works the same on Windows and Ubuntu.

if (Deno.env.get("QUARTO_PROJECT_RENDER_ALL")) {
  try {
    Deno.removeSync("../_site", { recursive: true });
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) throw err;
  }
}
