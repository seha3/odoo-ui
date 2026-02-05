function BrandIcon({ icon, title, size = 22 }) {
  return (
    <span className="brand-logo" aria-label={title} title={title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        height={size}
        width="auto"
        aria-hidden="true"
      >
        <path d={icon.path} fill="currentColor" />
      </svg>
    </span>
  );
}
export default BrandIcon;