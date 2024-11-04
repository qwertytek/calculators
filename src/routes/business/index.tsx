import { component$, useStore, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuX } from "@qwikest/icons/lucide";
import { Input, Breadcrumb, Modal, Label, buttonVariants } from "~/components/ui";

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
        A bunch of calculators to better understand if your business idea makes
        mathematical sense
      </p>
      <Modal.Root>
        <Modal.Trigger class={[buttonVariants({ look: 'primary' })]}>
          Revenue Calculator
        </Modal.Trigger>
        <Modal.Panel>
          <Modal.Close class="absolute top-4 right-4">
            <LuX class="h-5 w-5" />
          </Modal.Close>
          <Modal.Title class="text-4xl mb-5"> Revenue Calculator </Modal.Title>
          <Modal.Description class="mb-5">
            Know how many clients and how much you should charge for your subscription service
          </Modal.Description>
          <>
            <div>
              <Label for="subscription-cost-input">
                Monthly Subscription costs
              </Label>
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
                id="clients-input"
                class="w-1/3"
                type="number"
                value={state.clients}
                min={0}
                step={1}
                pattern="^[0-9]+$"
                onInput$={(_, el) => (state.clients = Number(el.value))}
              />
            </div>
            <div class="mt-10 flex justify-between text-center">
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
        </Modal.Panel>
      </Modal.Root>
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
