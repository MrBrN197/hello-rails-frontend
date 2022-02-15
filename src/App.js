import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<div>Greetings</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
