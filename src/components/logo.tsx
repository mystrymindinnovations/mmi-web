import Image from "next/image";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className, onClick }: LogoProps) {
  return (
    <div className="relative w-[160px] h-[80px]" onClick={onClick}>
      <Image
        src="/assets/logos/logo-h.png"
        alt="Swarikaro Logo"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 160px"
      />
    </div>
  );
}
