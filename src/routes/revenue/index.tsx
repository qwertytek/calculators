import { component$, useStore, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Input } from '~/components/ui';


export default component$(() => {
  const state = useStore({
    subscription: 0,
    clients: 0,
  });

  const monthlyRevenue = useComputed$(() => state.subscription * state.clients || 0);

  return (
    <>
      <h1>Business Calculator 👋</h1>
      <p>
        A calculator to visualize how much you should charge on you subscription
        based product
      </p>
      <label for="subscription-cost-input"> Monthly Subscription costs</label>
      <Input
        id="subscription-cost-input"
        min={0}
        step={1}
        pattern="^[0-9]+$"
        type="number"
        onInput$={(_, el) => (state.subscription = Number(el.value))}
      />
      <label for="clients-input"> Nº Clients </label>
      <Input
        id="clients-input"
        type="number"
        min={0}
        step={1}
        pattern="^[0-9]+$"
        onInput$={(_, el) => (state.clients = Number(el.value))}
      />
      <div>
        <h2>Monthly Revenue</h2>
        <p> {monthlyRevenue.value} $</p>
      </div>
      <div>
        <h2>Yearly Revenue</h2>
        <p>{Number(monthlyRevenue.value) * 12} $</p>
      </div>
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
