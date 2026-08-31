export default function Copyright() {

  const today = new Date().getFullYear();

  return (
    <p className="pt-12 text-right text-xs text-white/60">
      © {today} cocozen-museum
      <br className="md:hidden" />
      {' '}Powered by Next.js / Tailwind CSS
    </p>
  );
}