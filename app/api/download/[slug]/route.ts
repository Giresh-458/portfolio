// No resume or publication PDFs are published yet. Replace this handler once real documents are available.
export async function GET() {
  return new Response("No downloadable document has been published yet.", {
    status: 404,
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
