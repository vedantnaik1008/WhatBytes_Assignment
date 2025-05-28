import { combinedData } from '../../../services/api';

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json(combinedData);
    } catch (error) {
        console.log('[FETCH_ERROR]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
