import { component$, type PropsOf } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik"; // Import QRL as a type
import { Input } from "../../ui/input/input";
import { Label } from "../../ui/label/label";

type formControlProps = PropsOf<"input" | "label"> & {
  onInput$: QRL<(_: any, el: HTMLInputElement) => void>;
  value: string;
  formId: string;
  labelText: string;
};

export const FormControl = component$<formControlProps>(
  ({ onInput$, value, formId, labelText }) => {
    return (
      <>
        <Label for={formId}> {labelText} </Label>
        <Input
          class="mb-8"
          value={value}
          id={formId}
          min={0}
          step={1}
          type="number"
          onInput$={onInput$}
        />
      </>
    );
  },
);
