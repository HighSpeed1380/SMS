import { useRoutes } from 'react-router-dom';
import getRoutes from './routes';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const routing = useRoutes(getRoutes());

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;