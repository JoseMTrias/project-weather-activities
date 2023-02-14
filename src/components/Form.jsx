export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
    event.preventDefault();
    const newActivityElement = new FormData(event.target);
    const newActivity = Object.fromEntries(newActivityElement);

    onAddActivity(newActivity);

    event.target.reset();
    document.getElementById('activity').focus();
  }

  return (
    <form onSubmit={handleAddActivity}>
      <h3 aria-label="form title element">Form element</h3>
      <label htmlFor="activity">Name of Activity</label>
      <input type="text" name="activity" id="activity"></input>
      <label htmlFor="notes">Notes of Activity</label>
      <input type="text" name="notes" id="notes"></input>
      <label htmlFor="weather">Good-bad weather checkbox</label>
      <input type="checkbox" name="weather" id="weather"></input>
      <button type="submit" onAddActivity={onAddActivity}>
        Add activity
      </button>
    </form>
  );
}
