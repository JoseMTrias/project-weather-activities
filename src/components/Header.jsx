export default function Header({ icon, temperature }) {
  return (
    <header>
      <h1>{icon}</h1>
      <h1>{temperature} ºC</h1>
    </header>
  );
}
