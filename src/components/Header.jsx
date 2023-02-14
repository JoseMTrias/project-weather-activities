export default function Header({ icon, temperature }) {
  return (
    <>
      <h1>{icon}</h1>
      <h1>{temperature} ºC</h1>
    </>
  );
}
