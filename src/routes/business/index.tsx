import { component$, useStore, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Input } from "~/components/ui";
import { Label } from "~/components/ui";
import { Breadcrumb } from '~/components/ui';

export default component$(() => {
  const state = useStore({
    subscription: 1,
    clients: 1,
  });

  const monthlyRevenue = useComputed$(
    () => state.subscription * state.clients || 0,
  );

  return (
    <>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page> Business Calculator </Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <h1 class="mt-8">Business Calculator</h1>
      <p class="mb-6 mt-1">
        A bunch of calculators to better understand if your business idea makes mathematical sense
      </p>
      <div class="w-1/3">
        <Label for="subscription-cost-input"> Monthly Subscription costs</Label>
        <Input
          class="mb-8 w-1/3"
          value={state.subscription}
          id="subscription-cost-input"
          min={0}
          step={1}
          pattern="^[0-9]+$"
          type="number"
          onInput$={(_, el) => (state.subscription = Number(el.value))}
        />
        <Label for="clients-input"> Number of Clients </Label>
        <Input
          class="w-1/3"
          id="clients-input"
          type="number"
          value={state.clients}
          min={0}
          step={1}
          pattern="^[0-9]+$"
          onInput$={(_, el) => (state.clients = Number(el.value))}
        />
      </div>
      <div class="mt-10">
        <div>
          <h2>Monthly Revenue</h2>
          <p> {monthlyRevenue.value} $</p>
        </div>
        <div>
          <h2>Yearly Revenue</h2>
          <p>{Number(monthlyRevenue.value) * 12} $</p>
        </div>
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
