import './App.css';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';
// import ClickCounterTwo from './Components/ClickCounterTwo';
// import ClickCounter from './Components/ClickCounter';
// import ClickCounterTwo from './Components/ClickCounterTwo';
// import CounterTwo from './Components/CounterTwo';
// import HoverCounter from './Components/HoverCounter';
// import HoverCounterTwo from './Components/HoverCounterTwo';
// import User from './Components/User';
// import ErrorBoundary from './Components/ErrorBoundary';
// import Hero from './Components/Hero';
// import ParentRefsInput from './Components/ParentRefsInput';
// import PortalsDome from './Components/PortalsDome';
// import FocusInput from './Components/FocusInput';
// import RefsDemo from './Components/RefsDemo';
// import ParentComp from './Components/ParentComp';
// import FragmentDemo from './Components/FragmentDemo';
// import Table from './Components/Table';
// import Button from './Components/Button';
// import Form from './Components/Form';
// import LifecycleA from './Components/LifecycleA';
// import NameList from './Components/NameList';
// import Stylesheet from './Components/Stylesheet';
// import UserGreeting from './Components/UserGreeting';
// import Greet from './Components/Greeting'
// import WelcomeClass from './Components/WelcomeClass';
// import Message from './Components/Message';
// import Counter from './Components/Counter';
// import ClickHandler from './Components/ClickHandler';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
        {/* <Greet name='Silver' />
        <Greet name='Tom' />
        <Greet name='Adam' />
        <WelcomeClass name='Silver' />
        <WelcomeClass name='Dina' /> */}
        {/* <Counter />
        <Greet name='David' surname='Jackson'/>
        <WelcomeClass name='Jesus' surname='Khristopfer'/> 
        <ClickHandler />
        <ClassClick /> 
        <EventBind /> 
        <ParentComponent /> 
        <UserGreeting /> 
        <NameList /> 
        <Button/>   
        <Form />  
        <LifecycleA /> 
        <FragmentDemo />  
        <Table />  
        <ParentComp />  
        <RefsDemo />  
        <FocusInput />  
        <ParentRefsInput />  
        <PortalsDome />  
        <ErrorBoundary>
          <Hero heroName={'Joker'}/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={'Spider-Man'}/>
        </ErrorBoundary>  
        <ClickCounter />  
        <HoverCounter />  
        <ClickCounterTwo />
        <HoverCounterTwo />  */}
        {/* <User render={(isLogging) => isLogging ? 'Vishwas' : 'Guest'}/> 
        <CounterTwo render={(count, incrementCount) => 
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
        <CounterTwo render={(count, incrementCount) => 
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>}/>  */}
        <UserProvider value='Vishwas'>
          <ComponentC />
        </UserProvider>
    </div>
  );
}

export default App;
