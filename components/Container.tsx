import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={`max-w-4xl mx-auto px-6 ${className}`.trim()}>{children}</div>;
}
