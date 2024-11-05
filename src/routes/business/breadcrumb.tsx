import { component$ } from "@builder.io/qwik";
import { Breadcrumb } from "~/components/ui";

export default component$(() => {
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
    </>
  );
});
