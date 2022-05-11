import './App.css';
import { Greet } from './components/Greet';

function App() {
  const GreetData = {
    string: 'AAAA',
    number: 10,
    boolean: true,
    object: {
        obj1: 'AAA',
        obj2: 5,
        obj3: false
    },
    array: [
    {
      arr1: 'AA',
      arr2: 3,
      arr3: true
    },
    {
      arr1: 'A',
      arr2: 1,
      arr3: false
    }
  ]
  }
  return (
    <div className="App">
      <Greet
        string={GreetData.string}
        number={GreetData.number}
        boolean={GreetData.boolean}
        object={GreetData.object}
        array={GreetData.array}
      />
    </div>
  );
}

export default App;
