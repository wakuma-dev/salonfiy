import { useStore } from "@/store/Store";
import { Star, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import img from "../../../assets/83b36988547b4e469c51b1bd72244a81.jpg"
import img2 from "../../../assets/c7ccbfc0d9784f8102d05d3322d18759.jpg"
import img3 from "../../../assets/4cf588243cd4ee2d0e429e72e9cde4f1.jpg"
import img4 from "../../../assets/22aaa29bc4cd55afcdc248407c3e43d5.jpg"
import img5 from "../../../assets/ab2882f96dbdc1e2c2bdc4003d6dd145.jpg"
import img6 from "../../../assets/c1ff32a21486b6c84d42a4ee7d7e4063.jpg"
import img7 from "../../../assets/8ec048f37c7a3396b2296559887ba9ba.jpg"
import img8 from "../../../assets/77d451fdf8abf1a2a0594eedee9ea77f.jpg"
import img9 from "../../../assets/f8cf70bc06b05b92f975be364364f81a.jpg"
import img10 from "../../../assets/4804bc368692f6952d28a946b78adf1c.jpg"
import img11 from "../../../assets/5b92006ce716337582781f946caf3177.jpg"
import img12 from "../../../assets/d56b4f5c11e1c1b288e57d4567be5d06.jpg"
interface ReviewProps {
  icon: LucideIcon;
  title: string;
  subTitle: string;
  image: string;
  name: string;
  address: string;
}

const reviews: ReviewProps[] = [
  {
    icon: Star,
    title: "Amazing Experience",
    subTitle:
      "The service was excellent from start to finish. Everything was clean, professional, and beautifully done.",
    image: img,
    name: "Sarah Mitchell",
    address: "New York, USA",
  },
  {
    icon: Star,
    title: "Absolutely Loved It",
    subTitle:
      "I loved the attention to detail. The staff was friendly, welcoming, and made me feel completely comfortable.",
    image: img2,
    name: "Emily Carter",
    address: "London, UK",
  },
  {
    icon: Star,
    title: "Highly Recommended",
    subTitle:
      "One of the best experiences I've had. The result was exactly what I wanted, and the service was outstanding.",
    image: img3,
    name: "Olivia Anderson",
    address: "Toronto, Canada",
  },
  {
    icon: Star,
    title: "Professional Service",
    subTitle:
      "Everything was handled professionally. Booking was easy, the service was on time, and the final result was perfect.",
    image: img4,
    name: "Sophia Williams",
    address: "Sydney, Australia",
  },
  {
    icon: Star,
    title: "Beautiful Result",
    subTitle:
      "I couldn't be happier with the result. The team understood exactly what I wanted and delivered beautifully.",
    image: img5,
    name: "Ava Thompson",
    address: "Los Angeles, USA",
  },
  {
    icon: Star,
    title: "Great Atmosphere",
    subTitle:
      "The atmosphere was relaxing and welcoming. Everyone was kind and professional, and I really enjoyed my visit.",
    image: img6,
    name: "Isabella Brown",
    address: "Melbourne, Australia",
  },
  {
    icon: Star,
    title: "Worth Every Penny",
    subTitle:
      "The quality of the service exceeded my expectations. I will definitely be coming back again.",
    image: img7,
    name: "Mia Johnson",
    address: "Chicago, USA",
  },
  {
    icon: Star,
    title: "Fantastic Service",
    subTitle:
      "The staff were incredibly helpful and listened carefully to what I wanted. The whole experience was fantastic.",
    image: img8,
    name: "Amelia Davis",
    address: "Manchester, UK",
  },
  {
    icon: Star,
    title: "Exactly What I Wanted",
    subTitle:
      "They understood my request perfectly and delivered exactly what I had in mind. I'm very happy with the result.",
    image: img9,
    name: "Charlotte Wilson",
    address: "Vancouver, Canada",
  },
  {
    icon: Star,
    title: "Wonderful Experience",
    subTitle:
      "From booking to the final result, everything was smooth and easy. The service was excellent.",
    image: img10,
    name: "Evelyn Martinez",
    address: "Miami, USA",
  },
  {
    icon: Star,
    title: "Friendly & Skilled",
    subTitle:
      "The team was incredibly friendly and clearly knew what they were doing. I was impressed with the result.",
    image: img11,
    name: "Ella Taylor",
    address: "Dublin, Ireland",
  },
  {
    icon: Star,
    title: "I'll Definitely Return",
    subTitle:
      "A great experience with excellent service and attention to detail. I've already recommended it to my friends.",
    image: img12,
    name: "Grace Moore",
    address: "Boston, USA",
  },
];

export default function Reviews() {
  const theme = useStore((state) => state.theme);

 
  const infiniteReviews = [...reviews, ...reviews];

  return (
    <section
      className={`w-full overflow-hidden py-4 ${
        theme === "light"
          ? "bg-[#ffffff] text-black"
          : "bg-[#111111] text-white"
      }`}
    >
      {/* Header */}
      <div className="mx-auto mb-6 w-[90%]">
        <div className="flex flex-col items-start gap-1.5">
          <span className="text-left text-[16px] font-semibold leading-[24px] tracking-tighter md:text-[30px] md:leading-[36px]">
            Reviews
          </span>

          <p className="text-[15px] font-normal leading-[20px]">
            What people are saying about us
          </p>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="relative w-full overflow-hidden">

        {/* LEFT FADE */}
        <div
          className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r ${
            theme === "light"
              ? "from-white"
              : "from-[#111111]"
          } to-transparent`}
        />

        {/* RIGHT FADE */}
        <div
          className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l ${
            theme === "light"
              ? "from-white"
              : "from-[#111111]"
          } to-transparent`}
        />

        {/* Infinite track */}
        <motion.div
          className="flex w-max gap-3 md:gap-5"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {infiniteReviews.map((review, index) => {
            const Icon = review.icon;

            return (
              <motion.article
                key={`${review.name}-${index}`}
                className={`flex h-[350px] w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-[#d3481b] p-3 md:w-[350px] ${
                  theme === "light"
                    ? "bg-[#fafafa]"
                    : "bg-[#1b1b1b]"
                }`}
              >
                {/* Content */}
                <div className="flex flex-col items-start gap-1.5">

                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <span className="text-[19px] font-medium leading-[24px]">
                    {review.title}
                  </span>

                  {/* Review */}
                  <p className="text-[15px] font-normal leading-[20px]">
                    {review.subTitle}
                  </p>
                </div>

                {/* User */}
                <div className="flex gap-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 rounded-full object-cover object-center"
                  />

                  <div className="flex flex-col gap-0.5">
                    <span className="text-[16px] font-medium leading-[22px]">
                      {review.name}
                    </span>

                    <p className="-mt-0.5 text-[14px] font-normal leading-[19px]">
                      {review.address}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}