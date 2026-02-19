import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          "url(https://picsum.photos/1200/600?blur=3)",
      }}
    >
      <div className="banner_contents">
        <h1>Dummy Netflix Original</h1>
        <p>
          This is a demo Netflix clone built using React.
          No real movies are connected.
        </p>
      </div>
    </header>
  );
}

export default Banner;
