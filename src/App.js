import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { AddTask } from "./components/AddTask";
import { useState } from "react";
import {storeTodo} from './axios/requests'
import './App.css';

function App() {
  const [showAddTask , setShowAddTask]=useState(false);
  const [tasks,setTasks]= useState(
   [])
  const toggleAddtask=() => {
    setShowAddTask(!showAddTask)
   
   }
   const addTask = async (task) => {
    const response = await storeTodo(task);
    setTasks([...tasks,response.data])
   }
  return (
    <Router>
     
    <div className="container">
      
      <Header title='Task Tracker On Blockchain' toggle={toggleAddtask} showAddTask={showAddTask} />
      
      {/* <Header title={12} /> */}
      <Routes>
      <Route path='/' element={<>
        {showAddTask?<AddTask onAdd={addTask} />:''}
      <Tasks tasks={tasks} />
      </>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
    
    </Router>
    
  );
}

export default App;
