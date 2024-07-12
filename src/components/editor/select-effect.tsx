import { RiArrowDownSLine } from "react-icons/ri";
import CustomIcon from "../ui/custom-icon";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "../ui/dropdown";
import { useEditorContext } from "./context";
import { Effect } from "@/types";

const SelectEffect = () => {
  const { effect, setEffect } = useEditorContext();

  return (
    <Dropdown modal={false}>
      <DropdownTrigger asChild>
        <button className="btn no-animation h-10 min-h-10 outline-none max-lg:grow">
          {effect?.name ?? "انتخاب افکت"}
          <CustomIcon icon={RiArrowDownSLine} />
        </button>
      </DropdownTrigger>

      <DropdownContent
        sideOffset={8}
        align="end"
        className="z-50 flex flex-col gap-1 rounded-lg border border-base-200 bg-base-100 p-2 shadow-md outline-none"
      >
        {options.map(({ endpoint, name }) => (
          <DropdownItem asChild key={name}>
            <button
              onClick={() => setEffect({ endpoint, name })}
              dir="rtl"
              className="flex h-9 w-full items-center rounded-md bg-base-100 px-5 outline-none hover:bg-base-200"
            >
              {name}
            </button>
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

const options: Effect[] = [
  {
    endpoint: "/api/remove-bg",
    name: "حذف بک‌ گراند",
  },
  {
    endpoint: "/api/grayscale",
    name: "سیاه سفید",
  },
];

export default SelectEffect;
