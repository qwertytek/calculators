import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";

export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <h1 class="mt-12">Hi 👋</h1>
      <p> Bunch of calculator apps to visualize numbers </p>
      <Button
        class="mt-5"
        onClick$={() => nav("/business")}
      >
        Business
      </Button>
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
