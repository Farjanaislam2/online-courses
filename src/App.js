import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/Routes/Routes';

function App() {
  return (
    <div className='ml-10 mr-10 bg-pink-100'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
