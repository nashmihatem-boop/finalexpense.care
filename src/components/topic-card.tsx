import Image from "next/image";
import Link from "next/link";

type TopicCardProps = {
  href: string;
  title: string;
  description: string;
  image?: string;
};

export function TopicCard({ href, title, description, image }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-mist bg-canvas-raised transition-colors hover:border-harbor-mid/50"
    >
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 640px) 340px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <p className="font-display text-lg font-extrabold text-harbor">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{description}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-harbor-mid">
          Read the guide <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
