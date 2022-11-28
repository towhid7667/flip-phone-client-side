import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
      <Toaster></Toaster>
     
    </div>
  );
}

export default App;
