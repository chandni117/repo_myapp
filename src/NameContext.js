import { createContext } from 'react' ;

const FNameContext = createContext() ;

const FNameProvider = FNameContext.Provider ;
const FNameConsumer = FNameContext.Consumer ;

export {FNameConsumer, FNameProvider} ;
export default FNameContext ;