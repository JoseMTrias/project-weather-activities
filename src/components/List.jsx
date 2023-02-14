import Entry from './Entry';
export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? 'The weather is awesome, go outside and: '
          : 'Bad weather outside, here is what you can do now: '}
      </h2>
      <ul>
        {activities.map((activity) => {
          return (
            <Entry
              id={activity.id}
              dateAdded={activity.dateAdded}
              name={activity.name}
              notes={activity.notes}
            />
          );
        })}
      </ul>
    </>
  );
}
