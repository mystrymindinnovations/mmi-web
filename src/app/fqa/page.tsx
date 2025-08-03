import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including Mobile App Development, Website Development, UI/UX & Graphic Design, SEO & Digital Presence, and Maintenance & Support.",
    },
    {
      question: "What is your development process?",
      answer: "Our development process consists of four main stages: Discovery, where we understand your needs; Design, where we create intuitive interfaces; Development, where we build robust solutions; and Deployment, where we ensure a smooth launch.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use the latest and greatest technologies to build amazing products. Our tech stack includes Next.js, React, Node.js, PHP, Laravel, SQL, and more.",
    },
    {
      question: "How can I apply for a job?",
      answer: "You can visit our Careers section to see our current openings. To apply, click the 'Apply Now' button on the role you're interested in, which will take you to our application form.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us via email at hello@mystrymind.tech or call us at 9082069773. You can also fill out the contact form on our website.",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center nav-text-gradient">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
