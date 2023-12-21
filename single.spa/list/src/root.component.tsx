import { useEffect, useState } from "react";
import { storeTodo, ITodo } from "@demo/store";
//import './root.component.scss';

export default function Root(props) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const subscriptions = storeTodo.storeTodo$.subscribe(setTodos);
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  return (
    <section className="container">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.text} </li>
        ))}
      </ul>
    </section>
  );
}
