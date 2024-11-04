import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";

export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <h1>Hi 👋</h1>
      <p> Bunch of calculator apps to visualize numbers </p>
      <Button onClick$={() => nav("/revenue")}>Business Revenue</Button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
