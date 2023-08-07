export const getServerSideProps = async () => {
  const req = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
  );
  const res = await req.json();

  return {
    props: { todos: res },
  };
};

function getTodoSSR({ todos }) {
  return (
    <main className="max-w-7xl min-h-screen bg-blue-400 mx-auto">
      <h1 className="text-center font-bold">Todo SSR</h1>
      <div className="flex gap-4 flex-wrap justify-center  py-3">
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
    </main>
  );
}

export default getTodoSSR;
