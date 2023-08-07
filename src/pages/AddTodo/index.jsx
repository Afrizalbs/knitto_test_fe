export const getServerSideProps = async () => {
  const req = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
  );
  const res = await req.json();

  return {
    props: { res },
  };
};

function AddTodo({ res }) {
  return (
    <main>
      {res?.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </main>
  );
}

export default AddTodo;
