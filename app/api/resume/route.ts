import { NextResponse } from 'next/server';
import { readFile, access } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const publicPath = join(process.cwd(), 'public');
    const resumePdfPath = join(publicPath, 'resume.pdf');
    const harshitaPdfPath = join(publicPath, 'Harshita.pdf');

    let resumePath = harshitaPdfPath;
    
    try {
      await access(resumePdfPath);
      resumePath = resumePdfPath;
    } catch {
      try {
        await access(harshitaPdfPath);
        resumePath = harshitaPdfPath;
      } catch {
        throw new Error('No resume file found');
      }
    }

    const fileBuffer = await readFile(resumePath);
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': fileBuffer.length.toString(),
        'Content-Disposition': 'inline; filename="Harshita_Loomba_Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Resume not found', { status: 404 });
  }
}
