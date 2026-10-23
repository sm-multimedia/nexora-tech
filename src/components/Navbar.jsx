const navItems = [
  { label: 'Overview', href: '#top' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Design', href: '#design' },
  { label: 'Experience', href: '#experience' },
];

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="site-nav screen-max-width" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Nexora Technologies home">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span className="brand-name">NEXORA</span>
        </a>

        <div className="nav-links">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        <a className="nav-cta" href="#design">Explore <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}

export default Navbar