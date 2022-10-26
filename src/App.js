import ComA from './ComA.js';
import './App.css';
import { FNameProvider } from './NameContext';
//import useEffects from './useEffects.js';
import Counter from './useReducers.js';


function App() {
  const fName = 'chiki rai'
  return (
    <>
    <Counter />
    <FNameProvider value={fName}>
      <ComA />
    </FNameProvider>
    </>
    
  );
}

export default App;
