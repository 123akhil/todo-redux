import React from "react";
import { useState } from "react";

const Form = () => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleInput = ({ target }) => {
    const { name, value } = target;

    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="form__container">
      <div className="form__left">
        <div className="form__right">
          <form>
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

            <div clasName="form__group">
              <button className="btn" type="submit">
                Add Todo
              </button>
            </div>
          </form>

          <div className="form__remaining">
            <p>Remaining Todos: 0</p>
          </div>
          <div className="form__buttons">
            <button className="btn" type="submit">
              Delete all Completed Todos
            </button>
          </div>
        </div>
      </div>
      <div className="form__right"></div>
    </div>
  );
};

export default Form;
