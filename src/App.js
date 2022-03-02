import Counter from './components/Counter';
import Headers from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import Profile from './components/UserProfile';
function App() {

  const isAuth = useSelector(state => state.authentication.isAuthenticated);
  return (
    <>
    <Headers />
    {!isAuth && <Auth />}
    {isAuth && <Profile />}
    <Counter />
    </>
  );
}

export default App;
