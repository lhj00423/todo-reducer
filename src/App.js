
import { useReducer } from 'react';
import './App.css';
import Header from './componets/Header';
import TodoLists from './componets/TodoLists';

//사용할 상태 초기값 설정
//초기상태를 컴포넌트 밖에 선언하기
const intialState = {
  input : "",
  todos: [
    {id: 1, text: "해야할일1", isDone: false},
    {id: 2, text: "해야할일2", isDone: false},
  ],
  id: 3
}
//reducer 함수 선언
function reducer(state, action){
  switch(action.type){
    case 'changeInput':
      return{
        ...state,
        input : action.payload 
    };
    case 'addTodo':
      return{
        ...state,
        todos : [...state.todos, action.todo],
        id : state.id +1,
        input:""
      } 
      case 'deleteTodo':
        return {
          ...state,
          todos: state.todos.filter(todo=> todo.id !== action.id) 
        };
      case  'toggleTodo':
        return {
          ...state,
          todos : state.todos.map(todo=>
          todo.id === action.id ? {...todo, isDone: !todo.isDone}
          : todo)
        }
    default:
      return state;
  }
}
function App() {
  //상태선언하기
  const [state, dispatch] = useReducer(reducer,intialState)
  const {todos,input,id} = state;
  //인풋값 업데이트 요청
  const onChange = (e) =>{
    dispatch({
      type : 'changeInput',
      payload : e.target.value
    })
  }
  //할일항목 추가 업데이트 요청
  const addTodo =() =>{
    dispatch({
      type : 'addTodo',
      todo : {id: id, text: input, isDone:false}
    })
  }
  //할일 항목 삭제 업데이트 요청
  const deleteTodo = (id) =>{
    dispatch({
      type: "deleteTodo",
      id:id
    })
  }
  const toggleTodo = (id) =>{
    dispatch({
      type: "toggleTodo",
      id:id
    })
  }
  return (
    <div className="App">
      <Header input={input} onChange={onChange} addTodo={addTodo}/>
      <TodoLists todos = {todos} deleteTodo={deleteTodo} toggleTodo ={toggleTodo}/>
    </div>
  );
}

export default App;
