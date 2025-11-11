"use client";

interface AnimatedTitleProps {
  title: string;
}

export default function AnimatedTitle({ title }: AnimatedTitleProps) {
  return (
    <div className="inline-flex items-center justify-center flex-wrap">
      {title}
    </div>
  );
}
