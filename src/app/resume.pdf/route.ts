import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');
  let filePath = path.join(publicDir, 'resume.pdf');

  if (!fs.existsSync(filePath)) {
    filePath = path.join(publicDir, 'resume.pdf.pdf');
  }

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Resume not found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="resume.pdf"',
      'Content-Length': fileBuffer.length.toString(),
    },
  });
}
