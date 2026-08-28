export default function Container({ 
  children,
  className = "",
}: { 
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div className={`max-w-2xl mx-auto px-6 py-12 ${className}`}>
      {children}
    </div>
  );
}
