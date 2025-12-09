import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'visitor-data.json');

// Helper to read data (fails gracefully if file missing)
async function getCount() {
    try {
        const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
        return JSON.parse(data).count || 0;
    } catch (error) {
        // If file doesn't exist or is corrupt, start at 0
        return 0;
    }
}

// Helper to write data
async function updateCount(newCount: number) {
    try {
        await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify({ count: newCount }), 'utf-8');
    } catch (error) {
        console.error("Failed to write visitor count:", error);
    }
}

export async function GET() {
    const count = await getCount();
    return NextResponse.json({ count });
}

export async function POST() {
    let count = await getCount();
    count++;
    await updateCount(count);
    return NextResponse.json({ count });
}
