import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const router = createHashRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
