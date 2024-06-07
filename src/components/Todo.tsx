import { component$ } from "@builder.io/qwik";

interface Todo {
  title: string;
  desc: string;
  completed: boolean;
  id: number;
}

export default component$<Todo>(({ title, desc }) => {
  return (
    <div class="bg-base-100 rounded-box flex items-center gap-6 p-8 shadow-xl">
      <div>
        <h1 class="text-xl font-bold">{title}</h1>
        <p>{desc}</p>
      </div>
      <button class="btn btn-primary text-primary-content">Complete</button>
    </div>
  );
});
