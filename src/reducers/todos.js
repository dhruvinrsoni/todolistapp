const filter = (text, string) => {
  //return text.toLowerCase().includes(string.toLowerCase()); //since some devies might not support ES6
  //return text.includes(string); //since some devies might not support ES6
  //return !(text.indexOf(string) === -1);
  return !(text.toLowerCase().indexOf(string.toLowerCase()) === -1);
};

const todos = (state = [], action) => {
	console.log("reducer/todos.js: Action: todos and the action.type:"+action.type);
  switch (action.type) {
    case 'RESET_SEARCH':
      console.log("reducer/todos.js: case 'RESET_SEARCH'. return")
      return state.map(todo =>
        true ? { ...todo, visible: true } : todo
      )

    case 'ADD_TODO':
	console.log("reducer/todos.js: case 'ADD_TODO'. return",[
        ...state,
        {
          id: action.id,
          text: action.text,
          visible:true,
          completed: false
        }
      ]);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          visible:true,
          completed: false
        }
      ]
    case 'RESET_TODO':
	console.log("reducer/todos.js: case 'RESET_TODO'. return",[
      ]);
      return [
      ]
    case 'TOGGLE_TODO':
	console.log("reducer/todos.js: case 'TOGGLE_TODO'. return", state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
	 case 'REMOVE_TODO':
	console.log("reducer/todos.js: case 'REMOVE_TODO'. return", state.filter(todo=>!(todo.id===action.id)));
      return state.filter(todo=>!(todo.id===action.id));
       /*state.map(todo =>
        todo.id === action.id ? {} : todo
      )*/
	 case 'DOWNLOAD_TODO':
	console.log("reducer/todos.js: case 'DOWNLOAD_TODO'. return", state.map(todo => todo));
  const element = document.createElement("a");
	//var itemsArr = document.getElementsByClassName("item");
	var textStr="";
	for(var i=0;i<state.length; i++)
	{
    
		if(action.statusEnabled){
			if(state[i].completed)
				textStr+= "[X] " ;
			else 
				textStr+= "[ ] " ;
		}	
    //textStr+=(i+1+". ");
		textStr+= state[i].text+" \r\n";
	}
    //const file = new Blob([document.getElementById('myInput').innerHTML], {type: 'text/plain'});
    const file = new Blob([textStr], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);

    var date = new Date();
    //var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.toString().substr(0,3) + " " +  date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    var str_with_0 = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + date.toString().substr(0,3) + " " +  ('0' + date.getHours()).slice(-2) + "-" + ('0' + date.getMinutes()).slice(-2) + "-" + ('0' + date.getSeconds()).slice(-2);

    element.download = "My To-Do List"+(action.statusEnabled?" - With Status":"")+" @"+str_with_0+".txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
      return state.map(todo => todo)

    case 'COPY_TO_CLIPBOARD':
    	console.log("reducer/todos.js: case 'COPY_TO_CLIPBOARD'. action.text:", action.text);  
      var aux = document.createElement("input");
      aux.setAttribute("value", action.text);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      console.log("Copied: "+aux.value);
      
      var elementId=document.getElementById(action.id+'item');
      var temp=elementId.innerHTML;
      elementId.innerHTML="<span style='font-weight: bold;font-size: larger;text-align: center;'>Copied!...</span>";
      setTimeout(function(){elementId.innerHTML=temp;}, 1500);
      
      //alert("Copied: "+aux.value);
      document.body.removeChild(aux);
    return state

      case 'SEARCH':
          console.log("reducer/todos.js: case 'SEARCH'. action:"+action.key+" & return", state.map(todo =>
            todo.text === action.key ? { ...todo, visible: true } : todo
          ));
        
        return state.map(todo => {
          //todo.text === action.key ? { ...todo, visible: true } : { ...todo, visible: false }
          console.log("todo.text: "+todo.text+ ", action.key: "+ action.key);
          return (filter(todo.text, action.key)) ? { ...todo, visible: true } : { ...todo, visible: false }
          }
        )
        
        /*return state.map(todo=>{
          console.log("todo.action"+todo.text+" and action.key"+action.key)
          if(todo.text===action.key)
            todo.visible=true;
          else
            todo.visible=false;
          return todo;
        })*/
        /*return state.map((todo) =>
          {
            if(todo.text.indexOf(action.key) === -1)
               return { ...todo } 
            else
                null;
            }
        )*/

    default:
	console.log("reducer/todos.js: case 'default'. return", state);
      return state
  }
}

export default todos