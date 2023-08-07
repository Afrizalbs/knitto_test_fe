import { useCreateTodosMutation } from "@/store/apiSlice/todoApi";

export default function AddTodoForm() {
  const [createTodos, { isloading }] = useCreateTodosMutation();

  function submitTodos(e) {
    e.preventDefault();
    createTodos(e.target["title"].value);
    e.target.reset();
  }

  return (
    <form
      className="border-2 border-amber-400 rounded-lg w-72 mx-auto mt-10 p-5"
      onSubmit={(e) => submitTodos(e)}
    >
      <h3 className="text-lg font-semibold mb-5">New Todo</h3>
      <div>
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>{" "}
        <input type="text" id="title" className="p-2 rounded-md" />
      </div>
      <div>
        <input
          disabled={isloading}
          type="submit"
          value={isloading ? "Loading..." : "Add New Todo"}
          className="bg-amber-400 p-3 mt-3 w-full font-semibold rounded-lg cursor-pointer"
        />
      </div>
    </form>
  );
}
