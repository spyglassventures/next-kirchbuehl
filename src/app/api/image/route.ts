import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    try {
        const { image } = await req.json();

        if (!image) {
            return NextResponse.json({ error: 'Image is required' }, { status: 400 });
        }

        const base64Image = image.split(',')[1];
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'OpenAI API key is not set in environment variables' }, { status: 500 });
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        };

        const payload = {
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: 'Was erkennst du in diesem Bild?',
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:image/jpeg;base64,${base64Image}`,
                            },
                        },
                    ],
                },
            ],
            max_tokens: 300,
        };

        const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        console.error('Error making request to OpenAI API:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
