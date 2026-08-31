import type { Overlay } from '@/types/ui/overlay';

export default function Overlay({ onClick }: Overlay) {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 z-10 bg-black/50 md:hidden"
    />
  );
}