export function Text({ 
    children,
    className,
}: { 
    children: React.ReactNode 
    className?: string
}) {
  return (
    <p className={`my-4 tracking-[0.15em] leading-[2.3] break-words whitespace-pre-line ${className}`}>{children}</p>
  );
}
