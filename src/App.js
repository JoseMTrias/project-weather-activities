import Form from './components/Form';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';
import { uid } from 'uid';
import List from './components/List';

const initialActivities = [
  {
    id: 1,
    dateAdded: 'June 15, 2046',
    name: 'surfing',
    weather: 'bad',
    notes: "don't forget the neopren",
  },
];

function App() {
  const [activities, setActivities] = useLocalStorageState('activityStorage', {
    defaultValue: initialActivities,
  });

  const id = uid(3);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const dateAdded = new Date().toLocaleDateString('en-us', options);

  function handleAddActivity({ name, notes, weather }) {
    setActivities([{ id, dateAdded, name, notes, weather }, ...activities]);
  }

  return (
    <>
      <header></header>
      <main>
        <List activities={activities} />
        <Form handleAddActivity={handleAddActivity} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
