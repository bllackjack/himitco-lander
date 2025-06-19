import { LangflowClient } from "@datastax/langflow-client";
import { NextRequest, NextResponse } from 'next/server';

// Define a type for the expected request body
interface ChatRequestBody {
  message: string;
  flowId: string;
  sessionId?: string;
}

export async function POST(request: NextRequest) {
  const LANGFLOW_API_KEY = process.env.LANGFLOW_API_KEY;
  const LANGFLOW_ID = process.env.LANGFLOW_ID;

  if (!LANGFLOW_API_KEY || !LANGFLOW_ID) {
    console.error("Missing Langflow API Key or Langflow ID environment variables.");
    return NextResponse.json({ 
      message: "Server configuration error: Langflow API key or ID not set." 
    }, { status: 500 });
  }

  try {
    const { message, flowId, sessionId } = await request.json() as ChatRequestBody;

    if (!message || !flowId) {
      return NextResponse.json({ 
        message: 'Bad Request: Missing "message" or "flowId" in request body.' 
      }, { status: 400 });
    }

    const client = new LangflowClient({ 
      langflowId: LANGFLOW_ID, 
      apiKey: LANGFLOW_API_KEY 
    });
    const flow = client.flow(flowId);

    const response = await flow.run(message, {
      input_type: 'chat',
      output_type: 'chat',
      session_id: sessionId || undefined,
    });

    return NextResponse.json({ 
      output: response.chatOutputText() || response.outputs 
    });

  } catch (error: any) {
    console.error('Error calling Langflow API:', error);
    return NextResponse.json({ 
      message: `Error processing your request with Langflow: ${error.message || 'An unknown error occurred.'}` 
    }, { status: 500 });
  }
} 