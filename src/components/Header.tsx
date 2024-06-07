import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <nav class="flex justify-between p-4">
      <a href="/">
        <h1 class="text-primary text-3xl font-bold italic tracking-tighter">
          Frostbite
        </h1>
      </a>
      <div class="flex items-center gap-2 font-medium">
        <a href="/routine">Routine</a>
      </div>
    </nav>
  );
});
