import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import installicon from '../images/install.png'
console.log("containers/App.js: Returning the <div><AddTodo /><VisibleTodoList /></div>");
const App = () => (
  <div style={{ backgroundColor: 'skyblue', padding: '15px', borderRadius: '21px' }}>
    {/*<link rel="stylesheet" href="lib/addtohomescreen/addtohomescreen.css" />
    <style src="lib/addtohomescreen/addtohomescreen.js" ></style>
    <script>
      addToHomescreen();
    </script>*/}
    <script src="/__/firebase/7.4.0/firebase-app.js"></script>
    <script src="/__/firebase/7.4.0/firebase-analytics.js"></script>
    <script src="/__/firebase/init.js"></script>
    
    
      
    <h2 style={{ textAlign: 'center' }}>
      <b> To Do List App</b>
    </h2>
	<AddTodo />
    <VisibleTodoList />
    <Footer />

    <button style={{ backgroundColor: 'deepskyblue', padding: '6px' }} id="install-app-button">
      <img src={installicon} alt="Install icon" width="10" height="10"/>
      &nbsp;Install
    </button>
  </div>
)

export default App