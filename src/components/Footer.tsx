const Footer = () => (
  <footer className="py-8 border-t border-foreground/[0.06]">
    <div className="container mx-auto px-6 text-center">
      <p className="mono-text text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rukmal Madhuranga. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default Footer;
