
import { cn } from "@/lib/utils";

export function QrCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("fill-current", className)}
      shapeRendering="crispEdges"
    >
      <path d="M0 0h30v30H0z M10 10h10v10H10z" />
      <path d="M70 0h30v30H70z M80 10h10v10H80z" />
      <path d="M0 70h30v30H0z M10 80h10v10H10z" />
      <path d="M40 0h10v10H40z M90 40h10v10H90z M40 90h10v10H40z M90 90h10v10H90z M0 40h10v10H0z" />
      <path d="M50 50h10v10H50z M60 60h10v10H60z M70 70h10v10H70z M60 40h10v10H60z M70 50h10v10H70z M50 70h10v10H50z" />
      <path d="M40 20h10v10H40z M20 40h10v10H20z M40 40h10v10H40z M30 50h10v10H30z M40 60h10v10H40z" />
      <path d="M50 10h10v10H50z M60 20h10v10H60z M80 30h10v10H80z M50 30h10v10H50z" />
      <path d="M10 50h10v10H10z M20 60h10v10H20z M30 80h10v10H30z M10 30h10v10H10z" />
      <path d="M50 80h10v10H50z M60 90h10v10H60z M80 60h10v10H80z M80 80h10v10H80z" />
    </svg>
  );
}

    