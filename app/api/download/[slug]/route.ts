import type { NextRequest } from "next/server";
import { publications, siteConfig } from "@/lib/data";

function escapePdfText(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function createPdf(lines: string[]): ArrayBuffer {
  const content = [
    "BT",
    "/F1 11 Tf",
    "50 760 Td",
    ...lines.flatMap((line, index) => [
      index === 0 ? "/F1 18 Tf" : "/F1 10 Tf",
      `(${escapePdfText(line.slice(0, 105))}) Tj`,
      index === 0 ? "/F1 10 Tf" : "",
      "0 -22 Td"
    ]),
    "ET"
  ].filter(Boolean).join("\n");
  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    `5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj\n`
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += object;
  }
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf).buffer as ArrayBuffer;
}

export async function GET(_request: NextRequest, { params }: { params: { slug: string } }) {
  const publication = publications.find((item) => item.id === params.slug);
  const isResume = params.slug === "resume";
  if (!publication && !isResume) return new Response("Not found", { status: 404 });

  let lines: string[];
  let filename: string;
  if (isResume) {
    lines = [
      `${siteConfig.name} — ${siteConfig.role}`,
      siteConfig.description,
      `Email: ${siteConfig.email}`,
      "Focus: Generative AI, multimodal learning, RAG, full-stack systems",
      "Selected work: Multimodal Emotion Recognition Research",
      "Selected work: SpaceNet Building Height Estimation",
      "Selected work: RestoConnect MERN Platform",
      "Core stack: Python, PyTorch, TypeScript, Next.js, Node.js, Docker"
    ];
    filename = "Aryan-Mehta-Resume.pdf";
  } else {
    if (!publication) return new Response("Not found", { status: 404 });
    lines = [
      publication.title,
      `${publication.venue} — ${publication.year}`,
      `Abstract: ${publication.abstract}`,
      `Methodology: ${publication.methodology}`,
      `Results: ${publication.results}`,
      `Future work: ${publication.futureWork}`
    ];
    filename = `${publication.id}.pdf`;
  }

  return new Response(createPdf(lines), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=86400"
    }
  });
}
