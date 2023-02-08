// "use client";
// import React, { useState } from "react";

// export default function Todo() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([
//     { todoText: "todo 1", completed: false },
//     { todoText: "todo 2", completed: true },
//     { todoText: "todo 3", completed: true },
//     { todoText: "todo 4", completed: false },
//   ]);

//   const onClickHandler = (meraElm: any) => {
//     console.log("meraElm", meraElm);

//     // map runs on array, and returns an array
//     const newTodos = todos.map((todo) => {
//       console.log("todo: ", todo);
//       if (todo.todoText == meraElm.todoText) {
//         todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
//       }
//       return todo;
//     });

//     console.log(newTodos);
//     setTodos(newTodos);
//   };
//   const addTodo = () => {
//     const newTodo = { todoText: todo, completed: false };
//     const newTodos = [...todos, newTodo];
//     setTodos(newTodos);
//     setTodo("");
//   };

//   const deleteTodo = (meraTodo: any) => {
//     const newTodos = todos.filter((todo) => {
//       if (todo.todoText == meraTodo.todoText) return false;
//       return true;
//     });
//     console.log("old todos", todos, "new todos", newTodos);
//     setTodos(newTodos);
//   };
//   return (
//     <>
//       <div>Todo</div>
//       <input
//         placeholder="add todo text"
//         value={todo}
//         onChange={(e) => {
//           setTodo(e.target.value);
//         }}
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((elm) => {
//           return (
//             <li
//               style={{
//                 color: elm.completed ? "green" : "orange",
//                 fontStyle: "oblique",
//                 listStyle: "none",
//               }}
//               key={elm.todoText}
//             >
//               <input
//                 type="checkbox"
//                 checked={elm.completed}
//                 onChange={() => {
//                   onClickHandler(elm);
//                 }}
//               />
//               {elm.todoText}
//               <button
//                 onClick={() => {
//                   deleteTodo(elm);
//                 }}
//               >
//                 {"  "}
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }


"use client";
import { Flex, UnorderedList, ListItem, Text, Input, Button, Heading, ListIcon, Box} from '@chakra-ui/react';
import React from 'react'
import { useState } from "react";
import {MdCheckCircle} from "react-icons/md";

export default function Todo() {
  const[tasks, setTasks] = useState([ "Metaverse Class on Wednesday", "Presentation", "Chakra documentation","Quiz preparation"]);
  const[Item, setItem] = useState("");
  function removeItem(taskName: any){
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }
  function AddItem(){
    if(Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");
    }
  }
  return ( 

    <>
    <Box maxWidth={"800px"} mx={"auto"} mt={"50px"} bg={"pink"} height={"600px"} borderRadius="10px" boxShadow="2xl" bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
    <Flex  justifyContent={"center"} alignItems="center" flexDirection={"column"}>
      <Heading mb={"15px"} mt={"8px"} color={"black"} fontFamily="serif"> To Do List</Heading>
      <UnorderedList listStyleType={"none"}>
        {tasks.map((task: any) => {
          return(
          <ListItem key={task.index} m={"10px"}>
             <ListIcon as={MdCheckCircle} color='purple.700' />
            {task}
            <Button shadow={"md"} fontSize={"x-small"} bg="pink.600" color={"white"} size='sm'  ml="10px" onClick={() => {
              removeItem(task);
            }}
            >
               Remove
               </Button>
               </ListItem>
            );
        }
        )}
      </UnorderedList>
      <Input maxWidth={"500px"} m={"10px"} size='sm' variant="filled" placeholder='Add Item' value={Item} onChange ={(e) => {
        setItem(e.target.value);
      }}>
      </Input>
      
      <Button shadow={"md"} color={"white"} m={"10px"} bg="pink.600" size='lg' onClick={AddItem}> Add Item </Button>
    </Flex>
    </Box>
    </>
      ); 
}