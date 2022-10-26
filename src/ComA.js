import React, { useContext } from 'react';
import { FNameConsumer } from './NameContext';
const ComA = () => {
    const context = useContext(FNameConsumer)
    return (
        <>
            <h1>hi I am {context}</h1>
        </>
    )

    /*return (
        <>
            <FNameConsumer>
                {
                    (fname) => <h1>Hello! I am {fname}</h1>
                }
            </FNameConsumer>
        </>
    )*/

}

export default ComA;