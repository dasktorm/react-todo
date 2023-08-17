import React, { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import { Task } from "../Task/Task";
import { Button } from '../Button/Button';

import "./tasklistStyle.css";

export const Tasklist = () => {
  const [tasks, setTasks] = useState([{label: 'Not Task Pending...', done: false}]);


  const CreateUser = () => {
    fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/damasoarmas",
      {
        method: "POST",
        body: JSON.stringify([]),
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      if (!(res.status >= 200 && res.status < 300)) {
        throw Error(`You have an error ${res.status} in create user!`);
      }
      return;
    })
    .then(() => { updateUserData() })
    .catch((err) => console.log(err));
    return;
  };


  const getUserData = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/damasoarmas")
      .then((res) => {
        if (res.status == 404) {
          CreateUser();
        }
        if (!(res.status >= 200 && res.status < 300)) {
          throw Error(`You have an error ${res.status} in request user data!`);
        }
        return res.json();
      })
      .then((body) => {
        setTasks(body);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getUserData, []);


  const updateUserData = () => {
    if (tasks.length > 0) {
      fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/damasoarmas",
        {
          method: "PUT",
          body: JSON.stringify(tasks),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => {
          if (res.status === 404){
            CreateUser();
          }
          if (!(res.status >= 200 && res.status < 300)) {
            throw Error(`You have an error ${res.status} in update user data!`);
          }
          return;
        })
        .catch((err) => console.log(err));
    }
    return;
  };
  useEffect(updateUserData, [tasks]);


  const deleteToDoList = () => {
    if (tasks.length === 0) {
        fetch(
          "https://assets.breatheco.de/apis/fake/todos/user/damasoarmas",
          { method: "DELETE" }
        )
          .then((res) => {
            if (!(res.status >= 200 && res.status < 300)) {
              throw Error(`You have an error ${res.status} in deleting!`);
            }
            return;
          })
          .catch((err) => console.log(err));
    }
    return;
  };
  useEffect(deleteToDoList, [tasks]);
  



  const addTask = (newTask) => {
    if (newTask.label.trim()) {
      const updatedTask = [newTask, ...tasks];
      setTasks(updatedTask);
    }
  };

  const editTask = (id) => {
    let labelUpdate = "";
    let promData = prompt("Write yor update here:");
    if (promData != null) {
      labelUpdate = promData.trim();
    }

    const updatedTask = tasks.map((task) => {
      if (task.id === id && labelUpdate.length > 0) {
        task.label = labelUpdate;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  }

  const completedTask = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <>
      <Input onSubmit={addTask} />
      <div className="container-tasklist">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            label={task.label}
            done={task.done}
            deleteTask={deleteTask}
            finishTask={completedTask}
            editTask={editTask}
          />
        ))}
      </div>
      <Button deleteAllTasks={deleteAllTasks}>Clear All</Button>
    </>
  );
};