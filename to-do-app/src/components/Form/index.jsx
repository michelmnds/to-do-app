/* eslint-disable react/prop-types */
import "./style.css";

export const Form = ({ title, setTitle, list, setList }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="formContainer">
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="titleInput"
        />
      </label>

      <button
        className="formBtn"
        type="submit"
        onClick={() =>
          setList([
            ...list,
            {
              id: list.length + 1,
              task: title,
              completed: false,
            },
          ])
        }
      >
        Add
      </button>
    </form>
  );
};
