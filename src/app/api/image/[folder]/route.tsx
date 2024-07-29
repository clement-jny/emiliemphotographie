import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

type RouteProps = {
  params: {
    folder: string;
  };
};

export const GET = async (request: NextRequest, { params: { folder } }) => {
  const imagesDirectory = path.join(process.cwd(), 'public', folder);

  if (!folder) {
    return NextResponse.json(
      { error: 'Folder not specified' },
      { status: 400 },
    );
  }

  //   console.log('imagesDirectory', imagesDirectory);
  //   console.log('folder', folder);

  //   return NextResponse.json({ success: true, images: [] }, { status: 200 });

  try {
    const filenames = await fs.readdir(imagesDirectory);
    const images = filenames.map((name) => path.join('/', folder, name));

    return NextResponse.json(
      { success: true, images },
      { status: 200, headers: { 'Content-Type': '' } },
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load images' },
      { status: 500 },
    );
  }
};
