import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
console.log("containers/App.js: Returning the <div><AddTodo /><VisibleTodoList /></div>");
const App = () => (
  <div style={{backgroundColor:'yellow', padding:'15px', borderRadius:'21px'}}>
<script src="/__/firebase/7.4.0/firebase-app.js"></script>
<script src="/__/firebase/7.4.0/firebase-analytics.js"></script>
<script src="/__/firebase/init.js"></script>
    <h1 style={{textAlign:'center'}}><b> To-Do App</b></h1>
	<AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App