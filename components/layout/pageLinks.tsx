
export default function PageLinks({
  label="",
  nav_className = "",
  ul_className = "",
  links,
  renderItem,
}: { 
  label: string,
  nav_className?: string,
  ul_className?: string,
  links: { href: string; text: string;}[];
  renderItem: (val: any) => React.ReactNode;
}) {
  
  return (
    <nav 
      className={nav_className} 
      aria-label={label}
    >
      <ul className={`${ul_className}`}>
        {links.map((link) => (
          <li key={link.href}>
            {renderItem(link)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
