import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTodoDelete()");
  }

  function onCancel() {
    setShowModal(false);
    console.log("onCancel()");
  }
  function onConfirm() {
    setShowModal(false);
    console.log("onConfirm()");
  }

  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
        />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
        <div className="todo__wrapper">
          <Todo onDelete={onTodoDelete} title="Finish Frontend Simplified" />
          <Todo onDelete={onTodoDelete} title="Finish Interview Section" />
          <Todo onDelete={onTodoDelete} title="Land a $100k Job" />
        </div>
      </div>
      {showModal && (
        <Modal
          onCancel={onCancel}
          onConfirm={onConfirm}
          title="Are you sure?"
        />
      )}
    </>
  );
}

export default App;
