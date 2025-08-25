'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Input schema: what user sends
const EstimateInputSchema = z.object({
  serviceType: z.string().describe('The type of service requested.'),
  projectDescription: z.string().describe('A description of the project.'),
});

export type EstimateInput = z.infer<typeof EstimateInputSchema>;

// Output schema: what AI returns
const EstimateOutputSchema = z.object({
  serviceType: z.string().describe('The type of service selected by the user.'),
  timeline: z.array(
    z.object({
      step: z.string().describe('A step in the development process.'),
      duration: z.string().describe('The estimated duration for this step (e.g., "1-2 weeks").'),
    })
  ).describe('A breakdown of the project timeline.'),
  totalDuration: z.string().describe('The total estimated duration for the project.'),
});

export type EstimateOutput = z.infer<typeof EstimateOutputSchema>;

// Core function
export async function getEstimate(input: EstimateInput): Promise<EstimateOutput> {
  const developmentProcess = `
    1. Discover & Understand: We start by listening. Whether it's a new app idea or a website revamp, we dig deep into your goals, audience, and challenges.
    2. Design & Prototype: Our UI/UX team builds wireframes and visual prototypes to bring your idea to life — ensuring it’s both functional and beautiful.
    3. Build & Develop: We write clean, scalable code using modern tech stacks — from mobile apps to web portals. You get regular updates and review links during development.
    4. Test & Iterate: We run through device tests, use cases, and feedback loops. We fix bugs, polish the experience, and make sure it’s production-ready.
    5. Launch & Support: We help you go live — whether it's on app stores, the web, or your own cloud infrastructure. Post-launch, we stick around for support, improvements, or scaling.
    
  `;

  const prompt = ai.definePrompt({
    name: 'estimatePrompt',
    input: { schema: EstimateInputSchema },
    output: { schema: EstimateOutputSchema },
    prompt: `
      You are an expert project manager at a software development agency called MystryMind.

Your task is to provide a realistic project timeline estimate based on the user's project description and selected service type.

IMPORTANT:
- ONLY include steps from the list below that are relevant to the given serviceType.
- For example, for "UI/UX & Graphic Design", skip steps like "Build & Develop", "Launch & Support", or "Maintain & Evolve".
- Do NOT include steps with "0 weeks" — omit such steps entirely.
- Do NOT add extra steps that are not in the provided list.

Development Process:
${developmentProcess}

Realism Guidelines:
- Consider the complexity described in the project description. Larger scope and more features require longer timelines.
- Assign a realistic range (e.g., "2-3 weeks") to each step instead of fixed numbers.
- At least "1-2 weeks" must be allocated for any included step — no step should be under 1 week.
- The total duration should be the sum of the individual step durations.
- Make sure durations reflect typical industry timelines for similar projects in real-life scenarios.
- Keep estimates proportional — if the project is small, reduce the ranges; if large or complex, increase them.

Output Requirements:
- Return the response strictly in JSON format.
- Include the original serviceType in the output.

Example Output:
{
  "serviceType": "UI/UX & Graphic Design",
  "timeline": [
    { "step": "Discover & Understand", "duration": "1-2 weeks" },
    { "step": "Design & Prototype", "duration": "2-3 weeks" }
  ],
  "totalDuration": "3-5 weeks"
}

User Input:
Service Type: {{{serviceType}}}
Project Description: {{{projectDescription}}}

    `,
  });

  const { output } = await prompt(input);
  if (!output) {
    throw new Error('Failed to generate estimate.');
  }

  return output;
}
