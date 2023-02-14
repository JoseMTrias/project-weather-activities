import Entry from './Entry';
export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => {
        console.log(activity);
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
  );
}
