
import type { NavItem } from '@/types/ui/navItem';

export default function Navigation<T>({
  label = "",
  theme = { nav: "", ul: "" },
  links,
  children,
}: NavItem<T>) {
  
  return (
    <nav 
      className={theme.nav} 
      aria-label={label}
    >
      <ul className={theme.ul}>
        {links.map((link, index) => (
          <li key={index}>
            {children(link)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
