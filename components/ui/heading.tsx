type HeddingProps = {
  id?:string;
  className?: string;
  children: React.ReactNode;
};

export function H1({
  id,
  className,
  children
}: HeddingProps) {
  return (
    <h1
      id={id}
      className={`text-4xl font-bold ${className}`}
    >{children}</h1>
  );
}

export function H2({
  className,
  children
}: HeddingProps) {
  return (
    <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
  );
}

