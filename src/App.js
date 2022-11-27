import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Router/Router/Router';

function App() {
  return (
    <div className='max-w-[1140px] mx-auto'>
     <RouterProvider router={router}></RouterProvider>
     <Toaster/>
    </div>
  );
}

export default App;
