import { Routes, Route } from 'react-router-dom'
import ScreenOne from './screens/ScreenOne';
import ScreenThree from './screens/ScreenThree';
import ScreenTwo from './screens/ScreenTwo';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<ScreenOne />} />
      <Route path='/second' element={<ScreenTwo />} />
      <Route path='/third' element={<ScreenThree />} />
    </Routes>
  );
}

export default App
