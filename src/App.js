import './App.css';
import routes from './routes/route';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
