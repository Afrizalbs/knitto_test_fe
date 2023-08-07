import { useGetTodosQuery } from "@/store/apiSlice/todoApi";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  function handlePageSize(e) {
    setPage(0);
    setPageSize(e.target.value);
  }

  const options = [
    {
      label: "5",
      value: 5,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "15",
      value: 15,
    },
  ];

  const {
    data: todos = [],
    error,
    isFetching,
    isError,
  } = useGetTodosQuery({
    pageStart: page,
    pageSize: pageSize,
  });

  if (isFetching) return <div>Loading</div>;

  if (isError) return <div>Oops, Error {error.status}</div>;

  if (todos.length < 1) return <div>No Todos today</div>;

  return (
    <main className="max-w-7xl min-h-screen bg-blue-400 mx-auto">
      <div className="flex  gap-4 flex-wrap justify-center  py-3">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="bg-blue-600 rounded-lg w-52 h-52">
              <div className="p-5 w-52 h-52 flex flex-col content-between">
                <h2 className="text-white flex-1">{todo.title}</h2>
                <div className="">
                  <button
                    disabled={todo.completed}
                    className={`${
                      todo.completed
                        ? "bg-gray-600 text-gray-300"
                        : "bg-amber-400 text-black"
                    } p-2 rounded-lg w-full`}
                  >
                    {todo.completed ? "selesai" : "berjalan"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 justify-center">
        <button
          disabled={page < pageSize}
          className={`${
            page < pageSize ? "bg-gray-600 text-gray-300" : "bg-amber-400"
          } p-2 rounded-lg font-semibold`}
          onClick={() => setPage((prev) => prev - Number(pageSize))}
        >
          Prev
        </button>
        <button
          disabled={todos < 10}
          className={`${
            todos < 10 ? "bg-gray-600 text-gray-300" : "bg-amber-400"
          } p-2 rounded-lg font-semibold`}
          onClick={() => setPage((prev) => prev + Number(pageSize))}
        >
          Next
        </button>
        <select
          onChange={(e) => handlePageSize(e)}
          className="bg-amber-400 rounded-lg w-20"
          value={pageSize}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </main>
  );
}
