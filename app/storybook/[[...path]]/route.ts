import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

function getContentType(ext: string): string {
  const contentTypes: Record<string, string> = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css',
    json: 'application/json',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    woff: 'font/woff',
    woff2: 'font/woff2',
    ttf: 'font/ttf',
    eot: 'application/vnd.ms-fontobject',
    map: 'application/json',
  };

  return contentTypes[ext] || 'application/octet-stream';
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { path?: string[] } },
) {
  const path = params.path || ['index.html'];
  const filePath = join(process.cwd(), 'storybook', ...path);

  try {
    if (!existsSync(filePath)) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const file = await readFile(filePath);
    const ext = path[path.length - 1]?.split('.').pop() || 'html';

    const contentType = getContentType(ext);

    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving Storybook file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
