const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lea Stan
        </p>
        <p className="text-xs text-muted-foreground">
          Built with purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
