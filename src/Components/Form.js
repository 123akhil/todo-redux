import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAllCompletedTodo } from "../Redux/actions/actions";
import TodoCard from "./TodoCard";

const Form = () => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const handleInput = ({ target }) => {
    const { name, value } = target;

    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const remainingTodos = todos?.filter((todo) => !todo.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo({ title: "", description: "" });
  };

  return (
    <div className="form__container">
      <div className="form__left">
        <div className="form__right">
          <form onSubmit={handleSubmit}>
            <input
              type="input"
              name="title"
              className="form__input"
              placeholder="What to do...?"
              value={newTodo.title}
              onChange={handleInput}
              required
            />

            {newTodo.title ? (
              <div className="form__input">
                <textarea
                  name="description"
                  className="form__input"
                  placeholder="Description if you ned any..?"
                  onChange={handleInput}
                  value={newTodo.description}
                />
              </div>
            ) : null}

            <div className="form__group">
              <button className="btn" type="submit">
                Add Todo
              </button>
            </div>
          </form>

          <div className="form__remaining">
            <p>Remaining Todos: {remainingTodos.length}</p>
          </div>
          <div className="form__buttons">
            <button
              className="btn"
              type="submit"
              onClick={() => dispatch(deleteAllCompletedTodo())}
            >
              Delete all Completed Todos
            </button>
          </div>
        </div>
      </div>
      <div className="form__right">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Form;
