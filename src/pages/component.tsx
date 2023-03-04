import {
  TasksProvider,
  Types,
  useTasks,
  useTasksDispatch,
} from "@/context/data";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";

function Component() {
  return (
    <TasksProvider>
      <div
        className="flex jc col gap-10 w-100"
        style={{ width: "100vw", textAlign: "center", marginTop: "100px" }}
      >
        <div className="flex w-100 col gap-10">
          <AddTask />

          <ChildrenComponent />
        </div>
      </div>
    </TasksProvider>
  );
}

function AddTask() {
  const dispatch = useTasksDispatch();
  const [value, setValue] = useState("");
  return (
    <form
      className="flex gap-10 jc center"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.length === 0) {
          return;
        }
        dispatch({
          type: Types.Create,
          payload: {
            id: nanoid(),
            name: value,
            price: 10,
          },
        });
        setValue("");
      }}
    >
      <input
        name="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="name"
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

function ChildrenComponent() {
  const getData = useTasks();

  const dispatch = useTasksDispatch();

  console.log(getData);
  return (
    <>
      <h1>Tasks</h1>
      {getData.map((el) => {
        return (
          <div key={el.id} className="flex gap-10 center jc">
            <div>{el.name}</div>
            <button
              className="btn fs-12"
              onClick={() =>
                dispatch({
                  type: Types.Delete,
                  payload: {
                    id: el.id,
                  },
                })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Component;
