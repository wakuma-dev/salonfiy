import { useStore } from "@/store/Store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


interface ItemProps {
  value: string;
  trigger: string;
  content: string;
}

const items: ItemProps[] = [
  {
    value: "faq-1",
    trigger: "What services does your salon offer?",
    content:
      "We offer a range of beauty services including hair styling, nail care, makeup, eyebrow services, skincare, and other beauty treatments.",
  },
  {
    value: "faq-2",
    trigger: "How can I book an appointment?",
    content:
      "You can browse our services, choose the service you want, select your preferred date and time, and confirm your appointment through Salonify.",
  },
  {
    value: "faq-3",
    trigger: "Can I cancel or reschedule my appointment?",
    content:
      "Yes. You can cancel or reschedule your appointment according to our salon's cancellation policy.",
  },
  {
    value: "faq-4",
    trigger: "How much do your services cost?",
    content:
      "Each service has its own price, which you can view on its service page before making an appointment.",
  },
  {
    value: "faq-5",
    trigger: "How long does an appointment take?",
    content:
      "The appointment duration depends on the service you choose. You can see the estimated duration when viewing the service details.",
  },
  {
    value: "faq-6",
    trigger: "Can I choose a specific beauty professional?",
    content:
      "Yes. When available, you can choose your preferred beauty professional when booking your appointment.",
  },
  {
    value: "faq-7",
    trigger: "How can I contact the salon?",
    content:
      "You can contact us through the contact information provided on Salonify, including our phone number, location, and other available contact options.",
  },
];

export default function Faq() {
  const theme = useStore((state) => state.theme);

  return (
    <section
      className={`min-h-auto w-full p-4 ${
        theme === "light"
          ? "bg-[#f7f7f7] text-black"
          : "bg-[#121212] text-white"
      }`}
    >
      {/* Heading */}
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 px-4 text-center">
        <h3 className="text-[12px] font-bold leading-[18px] tracking-wider text-[#6d28d9]">
          FAQ
        </h3>

        <span className="text-[30px] font-semibold leading-[36px] md:text-[36px] md:leading-[40px]">
          Frequently asked questions
        </span>

      </div>
       <Accordion multiple className={`w-full p-4 rounded-xl my-3 max-w-3xl mx-auto
         ${theme === "light" ? "text-black bg-white" : "text-white bg-[#1e1e1e]"}`} defaultValue={["faq-1"]}>
        {items.map((item) => {
            return(
                <AccordionItem key={item.value} value={item.value} className="text-[100px]">
                    <AccordionTrigger className={`text-[16px] leading-[24px]
                         font-bold hover:text-[#6d28d9] transition-colors duration-150`}>{item.trigger}</AccordionTrigger>
                    <AccordionContent className="text-[14px] leading-[23px] text-[#64748b] font-normal">{item.content}</AccordionContent>
                </AccordionItem>
            )
        })}
       </Accordion>
    
    </section>
  );
}