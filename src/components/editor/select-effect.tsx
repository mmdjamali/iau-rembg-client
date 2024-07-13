import {
  RiArrowDownSLine,
  RiCheckLine,
  RiCloseLine,
  RiSparkling2Line,
} from "react-icons/ri";
import CustomIcon from "../ui/custom-icon";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "../ui/dropdown";
import { useEditorContext } from "./context";
import { Effect } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import Icon from "../ui/icon";
import { useState } from "react";

const SelectEffect = () => {
  const { effect, setEffect } = useEditorContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dropdown modal={false}>
        <DropdownTrigger asChild>
          <button className="btn no-animation hidden h-10 min-h-10 outline-none max-lg:grow md:flex">
            {effect?.name ?? "انتخاب افکت"}
            <CustomIcon icon={RiArrowDownSLine} />
          </button>
        </DropdownTrigger>

        <DropdownContent
          sideOffset={8}
          align="end"
          className="z-50 hidden flex-col gap-1 rounded-lg border border-base-200 bg-base-100 p-2 shadow-md outline-none md:flex"
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="btn no-animation h-10 min-h-10 outline-none max-lg:grow md:hidden">
            {effect?.name ?? "انتخاب افکت"}
            <CustomIcon icon={RiArrowDownSLine} />
          </button>
        </DialogTrigger>

        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-50 bg-black/50" />
          <DialogContent
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-svh w-full flex-col rounded-t-box bg-base-100 pb-5 md:hidden",
              "data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full",
              "data-[state=closed]:duration-200 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full",
            )}
          >
            <div className="flex items-center justify-between px-4 py-4">
              <DialogTitle className="text-lg font-semibold">
                جلوه ها
              </DialogTitle>

              <DialogClose>
                <Icon icon={RiCloseLine} />
              </DialogClose>
            </div>

            <div className="overflow-y-auto px-5">
              <div className="flex flex-col rounded-box bg-base-100">
                {options.map(({ endpoint, name }, idx) => {
                  return (
                    <button
                      onClick={() => {
                        setOpen(false);
                        setEffect({ endpoint, name });
                      }}
                      key={idx}
                      className="relative flex items-center justify-between overflow-hidden border-b border-base-200 py-3"
                    >
                      <div className="inline-grid size-10 shrink-0 place-items-center rounded-full bg-base-content/60">
                        <Icon
                          className="text-[21px] text-base-100"
                          icon={RiSparkling2Line}
                        />
                      </div>

                      <div className="relative flex w-full flex-col items-start justify-start overflow-hidden px-4">
                        <span className="font-medium text-base-content/90">
                          {name}
                        </span>
                      </div>

                      {effect?.endpoint === endpoint && (
                        <Icon
                          icon={RiCheckLine}
                          className="shrink-0 !scale-x-100 text-[24px] text-blue-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
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
  {
    endpoint: "/api/posterize",
    name: "پستری کردن",
  },
  {
    endpoint: "/api/solarize",
    name: "سولاریزه کردن",
  },
  {
    endpoint: "/api/invert",
    name: "معکوس رنگ",
  },
];

export default SelectEffect;
