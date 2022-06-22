import { Component } from "react";
import './Todo.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            currTask: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }

    handleAddTask = () => {
        this.setState({
            tasks: [...this.state.tasks,{task: this.state.currTask,id:this.state.tasks.length+1}],
            currTask: ""
        })
    }

    handleDelete = (id) => {

        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id
        })

        this.setState({
            tasks: [...narr]
        })

        //Or :-    
        // let half_1 = [...this.state.tasks].slice(0, i);
        // let half_2 = [...this.state.tasks].slice(i + 1)
        // this.setState({
        //     tasks: [...half_1, ...half_2],

        // })

    }

    render() {
        return (
            <div class = "Everything">
                <h1>Enter Task</h1>
                <input onKeyUp={(e)=>{
                    if(e.key == "Enter") this.handleAddTask(e)}} 
                    type="text" value={this.state.currTask} onChange={this.handleChange} />
                <button id="addTask" onClick={this.handleAddTask} > Add Task </button>

                <ul>{
                    this.state.tasks.map((taskObj) => (
                        <li key = {taskObj.id}>
                            <p>{taskObj.task}</p> 
                            <button id = "#handleDelete" onClick={()=>this.handleDelete(taskObj.id)}> Delete Task </button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default Todo;