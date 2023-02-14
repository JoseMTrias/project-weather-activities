export default function Entry({ id, name, dateAdded, notes }) {
  console.log(name);
  return (
    <li key={id}>
      <h4>{name}</h4>
      <p>{notes}</p>
      <p>{dateAdded}</p>
      <button>X</button>
    </li>
  );
}
