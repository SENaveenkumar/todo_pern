
import './App.css';
import InputTodo from './Components/InputTodo';
import ListTodos from './Components/ListTodo';
// import MyPractice from './Components/Pract';

function App() {
  return (
    <>
      <div className='container'>
        <InputTodo />
        <ListTodos/> 
        {/* <MyPractice /> */}
        </div>
      
    </>
  );
}

export default App;
