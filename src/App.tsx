import { useEffect } from 'react';
import './App.scss'
import { useAppDispatch, useAppSelector } from './store/store'
import { fetchUsers } from './store/reducers/fetchUsersAction';



function App() {

  const {users, isLoading, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])


  return (
    <>
      <div className='inner'>
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>{error}</h1>}
        {users?.map(user => <div key={user.id}>{user.name} : {user.email}</div>)}
      </div>  
    </>
  )
}

export default App
