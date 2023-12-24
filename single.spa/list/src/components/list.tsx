import React, { Suspense, useEffect, useState } from "react";
import { storeTodo, ITodo } from "@demo/store";
import delayForDemo from "../vendors/delay.js";

import "./list.scss?modules=false";
import Loading from "./loading";

const Item = React.lazy(() => delayForDemo(import("./item")));
//import Item from "./item";

export default function List(props): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const subscriptions = storeTodo.storeTodo$.subscribe(setTodos);
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  return (
    <section className="container">
      <h1 className="text-3xl font-bold underline">TODO List</h1>
      <ul>
        {todos.map((todo) => (
          <Suspense key={todo.id} fallback={<Loading />}>
            <Item value={todo.text} />
          </Suspense>
        ))}
      </ul>
    </section>
  );
}
