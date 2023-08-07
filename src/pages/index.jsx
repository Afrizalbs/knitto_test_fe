import { useGetTodosQuery } from "@/store/apiSlice/todoApi";

export default function Home() {
  const {
    data: todos = [],
    error,
    isFetching,
    isError,
  } = useGetTodosQuery({
    pageStart: 0,
    pageSize: 20,
  });

  if (isFetching) return <div>Loading</div>;

  if (isError) return <div>Oops, Error {error.status}</div>;

  if (todos.length < 1) return <div>No Todos today</div>;

  return (
    <main>
      {
        <div>
          {todos.map((todo) => {
            return <div key={todo.id}>{todo.title}</div>;
          })}
        </div>
      }
    </main>
  );
}
