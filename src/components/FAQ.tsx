import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you available for emergency electrical repairs?",
    answer: "Yes, we're open 24 hours a day, 7 days a week. Whether it's a power outage, sparking outlet, or any electrical emergency, call us immediately at 0425 170 200 for fast response.",
  },
  {
    question: "What areas do you service?",
    answer: "We primarily serve Craigieburn, Wollert, and nearby areas in Victoria. Contact us to confirm we service your specific location.",
  },
  {
    question: "Are your electricians licensed and insured?",
    answer: "Absolutely. All our electricians are fully licensed and we carry comprehensive insurance coverage to protect you and your property.",
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing varies depending on the type and scope of work. Contact us for a free, no-obligation quote. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our work with quality guarantees. All installations and repairs come with appropriate warranties for your peace of mind.",
  },
  {
    question: "Can you help with electrical panel upgrades?",
    answer: "Yes, we specialize in electrical panel replacement and upgrading. If your current panel is outdated or can't handle your power demands, we can upgrade it safely and efficiently.",
  },
  {
    question: "How quickly can you respond to service calls?",
    answer: "For emergencies, we aim to respond as quickly as possible, often within the hour. For standard appointments, we'll work with your schedule to find a convenient time.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, we offer free quotes for all electrical work. Fill out our contact form or call us at 0425 170 200 to discuss your needs and receive an accurate estimate.",
  },
  {
    question: "Can you install outdoor lighting and security systems?",
    answer: "Absolutely. We install outdoor lighting for security and ambiance, as well as complete security system installations including cameras and monitoring equipment.",
  },
  {
    question: "What should I do if I smell burning or see sparks from an outlet?",
    answer: "This is an emergency. Turn off power to that area immediately if possible and call us right away at 0425 170 200. Do not use the affected outlet or switch until we've inspected and repaired it.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about our electrical services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 rounded-lg px-6 data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}