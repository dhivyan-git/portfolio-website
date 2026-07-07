export default function Footer({ name }) {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {name}</span>
        <span>built with react + node</span>
      </div>
    </footer>
  );
}
