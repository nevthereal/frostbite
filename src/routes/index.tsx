import { component$ } from "@builder.io/qwik";
import dayjs from "dayjs";
import Todo from "~/components/Todo";

export default component$(() => {
  const today = dayjs();

  return (
    <>
      <section class="grid h-[50dvh] grid-cols-2">
        <section class="flex flex-col items-center justify-center text-center lg:text-left">
          <h1 class="text-5xl font-bold">Dashboard</h1>
          <h3 class="py-6">You completed 3 tasks today</h3>
        </section>
        <section class="flex flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">
            Due {today.toDate().toLocaleString([], { dateStyle: "long" })}:
          </h1>
          <Todo
            completed={false}
            desc="Complete this app"
            id={1}
            title="Build this SaaS"
          />
        </section>
      </section>
    </>
  );
});
