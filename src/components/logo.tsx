import Image from "next/image";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className, onClick }: LogoProps) {
  return (
    <div className="relative w-[160px] h-[80px]" onClick={onClick}>

<Image
  src="/assets/logos/og-image.png"
  alt="MystryMind Innovations company logo – AI, cloud, and web solutions for startups and businesses"
  fill
  className="object-contain"
  sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 160px"
/>


    </div>
  );
}
