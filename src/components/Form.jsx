export default function Form({ handleAddActivity }) {
  function onAddActivity(event) {
    event.preventDefault();
    const newActivityElement = new FormData(event.target);
    const newActivity = Object.fromEntries(newActivityElement);
    newActivity.weather = event.target.elements.weather.checked;

    handleAddActivity(newActivity);

    event.target.reset();
    document.getElementById('activity').focus();
  }

  return (
    <form className="form" onSubmit={onAddActivity}>
      <h3 aria-label="form title element">Add new Activity</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name"></input>
      <label htmlFor="notes">Notes:</label>
      <input type="text" name="notes" id="notes"></input>
      <label htmlFor="weather">Good-weather activity:</label>
      <input type="checkbox" name="weather" id="weather"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
