import Alert from "@/component/Alert";
import {
  TasksProvider,
  Types,
  useTasks,
  useTasksDispatch,
} from "@/context/data";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";

function Component() {
  const [value, setValue] = useState("");
  return (
    <TasksProvider>
      <div
        className="flex jc col gap-10 w-100"
        style={{ width: "100vw", textAlign: "center", marginTop: "100px" }}
      >
        <div className="flex w-100 col gap-10">
          <ChildrenComponent />
          <Alert
            action={() => {
              console.log(value);
              setValue("");
            }}
            actionName="Create Template"
            title={"Create Template"}
            type="Create Template"
            buttonText="Create Template"
            icon={<PlusCircledIcon />}
            description={""}
            triggerName="Create Template"
          />
        </div>
      </div>
    </TasksProvider>
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
