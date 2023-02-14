export default function Entry({
  id,
  name,
  dateAdded,
  notes,
  onDeleteActivity,
}) {
  return (
    <li key={id}>
      <h4>{name}</h4>
      <p>{notes}</p>
      <p>{dateAdded}</p>
      <button
        onClick={() => {
          onDeleteActivity(id);
        }}
      >
        X
      </button>
    </li>
  );
}
