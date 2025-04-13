/** @format */

import { useState } from 'react';
import TabelView from './TabelView';
import GridView from './GridView';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  // const [taskData, setTaskData] = useState([]);

  const addTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const addDesc = (event) => {
    setDesc(event.target.value);
  };

  const addStatus = (event) => {
    setStatus(event.target.value);
  };

  const addCategory = (event) => {
    setCategory(event.target.value);
  };
  const addDate = (event) => {
    setDate(event.target.value);
  };

  const saveTask = () => {
    const obj = {
      taskName: taskName,
      desc: desc,
      status: status,
      category: category,
      date: date,
    };
    const taskInfo = JSON.parse(localStorage.getItem('tasks')) ?? [];

    const arr = [...taskInfo];
    arr.push(obj);

    localStorage.setItem('tasks', JSON.stringify(arr));

    setTaskName('');
    setDesc('');
    setStatus('');
    setCategory('');
    setDate('');
  };
  //console.log(taskData);
  return (
    <div>
      <div className='text-center flex flex-col w-4/12 justify-center m-auto mt-20'>
        <h1>Create Task</h1>
        <input
          className='bg-gray-200'
          type='text'
          name='note'
          id='note'
          placeholder='Enter Task Name'
          value={taskName}
          onChange={addTaskName}
        />
        <textarea
          className=''
          type='text'
          name='description'
          id='description'
          placeholder='Task Description'
          value={desc}
          onChange={addDesc}
        />
        <select value={status} onChange={addStatus}>
          <option>--select</option>
          <option>Todo</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <select value={category} onChange={addCategory}>
          <option>--Select</option>
          <option>Office</option>
          <option>Personal</option>
        </select>
        <input type='date' value={date} onChange={addDate} />
        <div className='flex gap-2 justify-end'>
          <button className='bg-red-200 w-20 cursor-pointer'>cancel</button>
          <button
            className='bg-green-200 w-20 cursor-pointer'
            onClick={saveTask}
          >
            Save
          </button>
        </div>
      </div>
      <TabelView taskData={JSON.parse(localStorage.getItem('tasks'))} />
      <GridView taskData={JSON.parse(localStorage.getItem('tasks'))} />
    </div>
  );
};
export default AddTask;
