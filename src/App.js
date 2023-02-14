import Form from './components/Form';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';
import { uid } from 'uid';

const initialActivity = [
  {
    id: 1,
    dateAdded: 'June 15, 2046',
    activity: 'surfing',
    weather: 'bad',
    notes: "don't forget the neopren",
  },
];

function App() {
  const [activiy, setActivity] = useLocalStorageState('activityStorage', {
    defaultValue: initialActivity,
  });

  const id = uid(3);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const dateAdded = new Date().toLocaleDateString('en-us', options);

  function onAddActivity({ activity, notes, weather }) {
    setActivity([{ id, dateAdded, activity, notes, weather }, ...activity]);
  }

  return (
    <>
      <header></header>
      <main>
        <Form onAddActivity={onAddActivity} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
