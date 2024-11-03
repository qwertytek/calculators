import { component$, useStore, useComputed$, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    const state = useStore({
        subscription: 0,
        clients: 0
    });

    const monthlyRevenue = useComputed$(() => state.subscription * state.clients);

  return (
    <>
        <h1>Business Calculator 👋</h1>
        <p>
            A calculator to visualize how much you should charge on you subscription based product
        </p>
        <label for="subscription-cost-input"> Monthly Subscription costs</label>
        <input
            id="subscription-cost-input"
            min={0}
            step={1}
            type="number"
            onInput$={(_, el) => (state.subscription = Number(el.value))}
        />
        <label for="clients-input"> Nº Clients </label>
        <input
            id="clients-input"
            type="number"
            min={0}
            step={1}
            onInput$={(_, el) => (state.clients = Number(el.value))}
        />
        <div>
            <h2>
                Monthly Revenue
            </h2>
           <p> {monthlyRevenue} $</p> 
        </div>
        <div>
            <h2>
                Monthly Revenue
            </h2>
           <p>{monthlyRevenue} $</p> 
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
