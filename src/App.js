import Form from './components/Form';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';
import { uid } from 'uid';
import List from './components/List';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [activities, setActivities] = useLocalStorageState('activityStorage', {
    defaultValue: [],
  });

  const [weather, setWeather] = useState({});
  const url = 'https://example-apis.vercel.app/api/weather';

  async function getWeather() {
    try {
      const response = await fetch(url);
      const fetchedWeather = await response.json();
      console.log(fetchedWeather);
      setWeather(fetchedWeather);
    } catch (error) {
      console.log(error);
    }
  }

  const filteredActivities = activities.filter(
    (activity) => activity.weather === weather.isGoodWeather
  );

  const id = uid(3);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const dateAdded = new Date().toLocaleDateString('en-us', options);

  function handleAddActivity({ name, notes, weather }) {
    setActivities([{ id, dateAdded, name, notes, weather }, ...activities]);
    console.log(activities);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getWeather();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // console.log(weather);
  console.log('here the icon', weather.condition);

  return (
    <>
      <Header icon={weather.condition} temperature={weather.temperature} />
      <main>
        <List
          activities={filteredActivities}
          isGoodWeather={weather.isGoodWeather}
        />
        <Form handleAddActivity={handleAddActivity} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
