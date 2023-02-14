export default function Form() {
  return (
    <form>
      <h3 aria-label="form title element">Form element</h3>
      <label htmlFor="activity">Name of Activity</label>
      <input type="text" name="activity" id="activity"></input>
      <label htmlFor="weather">Good-bad weather checkbox</label>
      <input type="checkbox" name="weather" id="weather"></input>
      <button type="submit" onAddActivity={onAddActivity}>
        Add activity
      </button>
    </form>
  );
}
