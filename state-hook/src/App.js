import './App.css';
import React from 'react';
// import ComponentA from './components/Reducer/ComponentA';
// import ComponentB from './components/Reducer/ComponentB';
// import ComponentC from './components/Reducer/ComponentC';
// import DataFetchingOne from './components/FetchingData/DataFetchingOne';
// import DataFetchingTwo from './components/FetchingData/DataFetchingTwo';
// import ParentComponent from './components/Callback/ParentComponent';
// import MemoCounter from './components/Callback/MemoCounter';
import FocusInput from './components/Ref/FocusInput';
// import CounterOne from './components/Reducer/CounterOne';
// import CounterTwo from './components/Reducer/CounterTwo';
// import CounterThree from './components/Reducer/CounterThree';
// import ComponentC from './components/Context/ComponentC';
// import DataFetching from './components/Effect/DataFetching';
// import HookIntervalCounter from './components/Effect/HookIntervalCounter';
// import IntervalClassCounter from './components/State/IntervalClassCounter';
// import MouseContainer from './components/State/MouseContainer';
// import ClassMouse from './components/State/ClassMouse';
// import ClassCounterOne from './components/State/ClassCounterOne';
// import HookCounterOne from './components/Effect/HookCounterOne';
// import HookMouse from './components/Effect/HookMouse';
// import HookCounterFour from './components/State/HookCounterFour';
// import HookCounterThree from './components/State/HookCounterThree';
// import ClassCounter from './components/State/ClassCounter';
// import HookCounter from './components/State/HookCounter';
// import HookCounterTwo from './components/State/HookCounterTwo';

// export const UserContainer = React.createContext()
// export const ChannelContainer = React.createContext()
// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <HookIntervalCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContainer.Provider value={'Dino'}>
        <ChannelContainer.Provider value={'Zavr'}>
          <ComponentC />
        </ChannelContainer.Provider>
      </UserContainer.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <MemoCounter /> */}
      <FocusInput />
    </div>
  );
}

export default App;
