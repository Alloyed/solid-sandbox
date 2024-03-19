import { createSignal } from "solid-js";

export function Counter(props: any) {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment} ref={props.ref}>
      {count()} paint!
    </button>
  );
}
