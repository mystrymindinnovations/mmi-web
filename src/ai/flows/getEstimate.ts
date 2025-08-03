
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const EstimateInputSchema = z.object({
  serviceType: z.string().describe('The type of service requested.'),
  projectDescription: z.string().describe('A description of the project.'),
});

export type EstimateInput = z.infer<typeof EstimateInputSchema>;

const EstimateOutputSchema = z.object({
  timeline: z.array(
    z.object({
      step: z.string().describe('A step in the development process.'),
      duration: z.string().describe('The estimated duration for this step (e.g., "1-2 weeks").'),
    })
  ).describe('A breakdown of the project timeline.'),
  totalDuration: z.string().describe('The total estimated duration for the project.'),
});

export type EstimateOutput = z.infer<typeof EstimateOutputSchema>;

export async function getEstimate(input: EstimateInput): Promise<EstimateOutput> {
  const developmentProcess = `
    1. Discover & Understand: We start by listening. Whether it's a new app idea or a website revamp, we dig deep into your goals, audience, and challenges.
    2. Design & Prototype: Our UI/UX team builds wireframes and visual prototypes to bring your idea to life — ensuring it’s both functional and beautiful.
    3. Build & Develop: We write clean, scalable code using modern tech stacks — from mobile apps to web portals. You get regular updates and review links during development.
    4. Test & Iterate: We run through device tests, use cases, and feedback loops. We fix bugs, polish the experience, and make sure it’s production-ready.
    5. Launch & Support: We help you go live — whether it's on app stores, the web, or your own cloud infrastructure. Post-launch, we stick around for support, improvements, or scaling.
    6. Maintain & Evolve: We offer regular updates, feature enhancements, and technical maintenance as your product grows and your audience expands.
  `;

  const prompt = ai.definePrompt({
    name: 'estimatePrompt',
    input: { schema: EstimateInputSchema },
    output: { schema: EstimateOutputSchema },
    prompt: `
      You are an expert project manager at a software development agency called MystryMind.
      Your task is to provide a project timeline estimate based on the user's project description and selected service type.
      You MUST use the following development process for the breakdown. Do not add or remove steps.

      Development Process:
      ${developmentProcess}

      Based on the user's request, provide a realistic duration for each step and a total estimated duration.
      - Be realistic with your estimates. Simple projects are shorter, complex projects are longer.
      - Do not output "0 weeks" for any core development step like Build, Test, or Design. Assign at least "1-2 weeks" to each step, scaling up for complexity.
      - The total duration should be the sum of the individual step durations.

      For example, a simple "car rental web development project" might have a total duration of "8-12 weeks", with individual steps like:
      - Discover & Understand: 1-2 weeks
      - Design & Prototype: 2-3 weeks
      - Build & Develop: 4-5 weeks
      - Test & Iterate: 1-2 weeks
      - Launch & Support: 1 week
      - Maintain & Evolve: Ongoing

      A complex "social media mobile app" could be "16-24 weeks".

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
