import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));
  return (
    <div className="App">
      <h1>Use form</h1>

      <form>
        <input
          name="age"
          type="number"
          inputMode="numeric"
          autoFocus="on"
          ref={register({
            required: true,
            maxLength: 2,
            minLength: 1,
            max: 99,
            min: 0,
            pattern: /^[0-9]*$/,
          })}
        />
        {errors.age && (
          <div>This field is required and it mast be number 0-99</div>
        )}

        <button onClick={handleSubmit(onSubmit)}>submit</button>
      </form>
    </div>
  );
}

export default App;
