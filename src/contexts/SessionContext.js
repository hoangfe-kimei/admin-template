import { ReactNode, createContext, useContext, useState } from 'react';

const initState = {
    isAuth: false,
};

const ContextSession = createContext([initState, () => {}]);
const useSessionContext = () => useContext(ContextSession);

function SessionContextProvider(props) {
    const [stateContext, setStateContext] = useState(initState);
    const values = [stateContext, setStateContext];

    return <ContextSession.Provider value={values}>{props.children}</ContextSession.Provider>;
}

export default SessionContextProvider;
export { useSessionContext };