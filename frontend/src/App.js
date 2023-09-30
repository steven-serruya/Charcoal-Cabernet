import './App.css';
import UserList from './components/UserList';
import useApplicationData from './hooks/useApplicationData';


function App() {

  const {
    state
  } = useApplicationData();

  return (
    <div className="App">
      <UserList users={state.users} />
    </div>
  );
}

export default App;
