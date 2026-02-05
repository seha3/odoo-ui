import "./Media.scss";

export default function Media({
  src,
  alt = "",
  tag = "Play video ▶",
  height = 240,
  rounded = 16,
  shadow = true,
}) {
  return (
    <div
      className={`award-media ${shadow ? "award-media--shadow" : ""}`}
      style={{ borderRadius: rounded, minHeight: height }}
    >
      {tag ? <div className="award-media__tag">{tag}</div> : null}

      {src ? (
        <img className="award-media__img" src={src} alt={alt} />
      ) : (
        <div className="award-media__placeholder">Image / Video</div>
      )}
    </div>
  );
}
