import './App.css';
import { ThemeContextProvider } from './components/useContext/themeContext';
import { Box } from './components/useContext/Box';
// import { Base } from './components/baseprops';

function App() {
  return <div className='App'>
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  </div>
};

// // BaseProps
// function App() {
//   const BaseData = {
//     string: 'AAAA',
//     number: 10,
//     boolean: true,
//     object: {
//       obj1: 'AAA',
//       obj2: 5,
//       obj3: false
//     },
//     array: [
//       {
//         arr1: 'AA',
//         arr2: 3,
//         arr3: true
//       },
//       {
//         arr1: 'A',
//         arr2: 1,
//         arr3: false
//       }
//     ]
//   }
//   return (
//     <div className="App">
//       <Base
//         string={BaseData.string}
//         number={BaseData.number}
//         boolean={BaseData.boolean}
//         object={BaseData.object}
//         array={BaseData.array}
//       />
//     </div>
//   );
// }

export default App;
