import './App.css';
import { Title } from '.Input/Components/Input/Input';
import { Tasklist } from '.Tasklist/Components/Tasklist/Tasklist';

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