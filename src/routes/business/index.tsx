import { component$, $, useStore, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuX } from "@qwikest/icons/lucide";
import { Modal, buttonVariants } from "~/components/ui";
import { FormControl } from "~/components/molecules"
import Breadcrumb from "./breadcrumb";

export default component$(() => {
  const revenue = useStore({
    subscription: 1,
    clients: 1,
  });

  const growth = useStore({
    startRevenue: 0,
    rate: 1,
    years: 1,
  });

  const monthlyRevenue = useComputed$(
    () => revenue.subscription * revenue.clients || 0,
  );

  const projectedRevenue = useComputed$(() => {
    const yearlyGrowth = growth.rate / 100;
    let revenue = growth.startRevenue;

    for (let i = 0; i < growth.years; i++) {
      revenue += revenue * yearlyGrowth;
    }

    return revenue.toFixed(2); // Return revenue as a fixed decimal string
  });

  return (
    <>
      <Breadcrumb />
      <h1 class="mt-8">Business Calculator</h1>
      <p class="mb-6 mt-1">
        A bunch of calculators to better understand if your business idea makes
        mathematical sense
      </p>
      <Modal.Root>
        <Modal.Trigger class={[buttonVariants({ look: "primary" })]}>
          Revenue Calculator
        </Modal.Trigger>
        <Modal.Panel>
          <Modal.Close class="absolute right-4 top-4">
            <LuX class="h-5 w-5" />
          </Modal.Close>
          <Modal.Title class="mb-5 text-4xl"> Revenue Calculator </Modal.Title>
          <Modal.Description class="mb-5">
            Know how many clients and how much you should charge for your
            subscription service
          </Modal.Description>
          <>
            <div>
              <FormControl
                formId="r-calc-monthly-subs-cost"
                value={String(revenue.subscription)}
                onInput$={$((_: any, el: HTMLInputElement) => (revenue.subscription = Number(el.value)))}
                labelText="Monthly Subscription costs"
              />
              <FormControl
                formId="r-calc-client-number"
                value={String(revenue.clients)}
                onInput$={$((_: any, el: HTMLInputElement) => (revenue.clients = Number(el.value)))}
                labelText="Number of clients"
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
      <Modal.Root class="mt-5">
        <Modal.Trigger class={[buttonVariants({ look: "primary" })]}>
          Growth Calculator
        </Modal.Trigger>
        <Modal.Panel>
          <Modal.Close class="absolute right-4 top-4">
            <LuX class="h-5 w-5" />
          </Modal.Close>
          <Modal.Title class="mb-5 text-4xl"> Growth Calculator </Modal.Title>
          <Modal.Description class="mb-5">
            Understand how much your business revenue can grow
          </Modal.Description>
          <>
            <div class="flex">
              <div>
                <FormControl
                  formId="g-calc-start-revenue"
                  value={String(growth.startRevenue)}
                  onInput$={$((_: any, el: HTMLInputElement) => (growth.startRevenue = Number(el.value)))}
                  labelText="Start Revenue"
                />
                <FormControl
                  formId="g-calc-growth-rate"
                  value={String(growth.rate)}
                  onInput$={$((_: any, el: HTMLInputElement) => (growth.rate = Number(el.value)))}
                  labelText="Growth Rate"
                />
              </div>
              <div class="ml-10">
                <FormControl
                  formId="g-calc-years"
                  value={String(growth.years)}
                  onInput$={$((_: any, el: HTMLInputElement) => (growth.years = Number(el.value)))}
                  labelText="Years"
                />
                <div class="pt-9">
                  <h2>Project Revenue</h2>
                  <p> {projectedRevenue} </p>
                </div>
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
