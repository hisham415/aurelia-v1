interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <aside className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
      <a href="#philosophy" className="mobile-link" onClick={onClose}>
        Philosophy <span>↗</span>
      </a>
      <a href="#residences" className="mobile-link" onClick={onClose}>
        Residences <span>↗</span>
      </a>
      <a href="#journal" className="mobile-link" onClick={onClose}>
        Journal <span>↗</span>
      </a>
      <a href="#contact" className="mobile-link" onClick={onClose}>
        Contact <span>↗</span>
      </a>
      <p>
        Aurelia creates low-density residences shaped by sunlight, landscape,
        and thoughtful materiality.
      </p>
    </aside>
  );
}
