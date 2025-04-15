import './App.css'
import Accordion from './components/Accordion/Accordion'
import RandomColor from './components/random-color/RandomColor';
import ReusableButton from './components/ReusableButton/ReusableButton';
import AddTask from './components/task-data/AddTask'




function App() {
  const btnSubmit = {
    background: "lightgreen",
    padding: "2px 6px"
  }
  const btnReset = {
    background: 'lightblue',
    padding: '2px 6px',
  };
  const btnCancel = {
    background: 'red',
    color: 'white',
    padding: '2px 6px',
  };

  const submitBtn = () => {
    alert("Submit Button")
  }
  const resetBtn = () => {
    alert('Reset Button');
  };
  const cancelBtn = () => {
    alert('Cancel Button');
  };



  return (
    <div className='flex gap-2'>
      {/* <AddTask />
      <Accordion />
      <RandomColor /> */}
      <ReusableButton
        btnClick={submitBtn}
        btnStyle={btnSubmit}
        label={'Submit'}
      />
      <ReusableButton
        btnClick={resetBtn}
        btnStyle={btnReset}
        label={'Reset'}
      />
      <ReusableButton
        btnClick={cancelBtn}
        btnStyle={btnCancel}
        label={'Cancel'}
      />
    </div>
  );
}

export default App
