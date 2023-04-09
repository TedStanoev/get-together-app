import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';

import routes from './routes';

import App from '../app/App';

import LandingPage from '../../pages/landing/Landing';
import RegisterPage from '../../pages/register/RegisterPage';
import LoginPage from '../../pages/login/LoginPage';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={routes.root}
      element={<App />}
    >
      <Route path={routes.landing} element={<LandingPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path={routes.login} element={<LoginPage />} />
    </Route>
  )
)