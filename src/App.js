import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Greeting />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
