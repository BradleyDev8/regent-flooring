export default function Footer() {
  return (
    <footer className="bg-espresso text-dust py-6 px-8 max-[900px]:py-5 max-[900px]:px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-7 text-[13px] leading-[1.3] flex-wrap max-[900px]:gap-3.5 max-[900px]:text-xs">
          <div>
            <img
              src="/assets/regent-logo.png"
              alt="Regent Flooring"
              className="h-8 brightness-0 invert"
            />
          </div>
          <div className="text-parchment font-medium">
            24-26 Regent St, Newtownards · BT23 4LJ
          </div>
          <div className="inline-flex items-center gap-2.5 ml-auto max-[900px]:ml-0">
            <a href="tel:02891812345" className="text-parchment hover:text-brass">
              028 9181 2345
            </a>
            <span className="text-border-dark">·</span>
            <a
              href="mailto:hello@regentflooring.co.uk"
              className="text-parchment hover:text-brass"
            >
              hello@regentflooring.co.uk
            </a>
          </div>
          <div className="inline-flex items-center gap-3">
            <span>© 2026 Regent Flooring Ltd</span>
            <span className="text-border-dark">·</span>
            <a className="hover:text-parchment cursor-pointer">Privacy</a>
            <a className="hover:text-parchment cursor-pointer">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
