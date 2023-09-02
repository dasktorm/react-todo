import './App.css';
import { Title } from './Components/Title/Title.js';
import { Tasklist } from './Components/Tasklist/Tasklist.js';

function App() {
  return (
    <div className="container m-auto">
      <div className='container-List'>
        <Title text='To Do List'/>
        <Tasklist />
      </div>
    </div>
  );
}

export default App;