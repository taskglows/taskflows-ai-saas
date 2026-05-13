import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = body.title || "Untitled workflow";
    const description = body.description || "";

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
Create a structured business workflow.

Workflow title: ${title}
Description: ${description}

Return:
1. Objective
2. Step-by-step workflow
3. Suggested owners
4. Estimated duration
5. Automation suggestions
      `,
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate workflow" },
      { status: 500 }
    );
  }
}