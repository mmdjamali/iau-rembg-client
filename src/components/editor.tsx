import { cn, imageToBase64Browser, jst } from "@/lib/utils";
import { useEffect, useRef } from "react";
import CustomIcon from "./ui/custom-icon";
import {
  RiAddCircleLine,
  RiCloseLine,
  RiDownload2Line,
  RiMagicLine,
} from "react-icons/ri";
import { BACKEND_URL } from "@/constants/env";
import SelectEffect from "./editor/select-effect";
import { useEditorContext } from "./editor/context";

const EditorComponent = () => {
  const {
    effect,
    image,
    isDragging,
    isPending,
    setImage,
    setIsDragging,
    setIsPending,
  } = useEditorContext();

  const timeout = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    const onDrop = async (e: DragEvent) => {
      e.preventDefault();

      if (!e.dataTransfer?.items) return;

      if (e.dataTransfer.files?.length) {
        setImage({
          base64: await imageToBase64Browser(e.dataTransfer.files[0]),
          file: e.dataTransfer.files[0],
        });
      }
    };

    const onDragOver = (e: DragEvent) => {
      e.preventDefault();

      if (!isDragging) setIsDragging(true);

      if (isDragging) {
        if (timeout.current) clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
          setIsDragging(false);
        }, 250);
      }
    };

    window?.addEventListener("drop", onDrop);
    window?.addEventListener("dragover", onDragOver);

    return () => {
      window?.removeEventListener("drop", onDrop);
      window?.removeEventListener("dragover", onDragOver);
    };

    /*eslint-disable*/
  }, [isDragging]);

  const sendFile = async (file: File) => {
    if (!effect) return;

    setIsPending(true);

    try {
      const data = new FormData();

      data.append("file", file);

      console.log(file.type);

      const res = await fetch(jst(BACKEND_URL, effect?.endpoint), {
        method: "POST",
        headers: {},
        body: data,
      });

      if (res.ok) {
        const blob = await res.blob();
        const newFile = new File([blob], "file.png");

        setImage({
          base64: await imageToBase64Browser(newFile),
          file: newFile,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100",
          !image &&
            "[background-image:repeating-conic-gradient(#e6e7ed_0_25%,transparent_0_50%)] [background-position:50%] [background-size:28px_28px]",
        )}
      >
        {isPending && (
          <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-base-300/75">
            <span className="loading loading-dots loading-lg bg-primary" />
          </div>
        )}

        {image ? (
          <img
            draggable={false}
            src={image.base64}
            className="mx-auto h-full select-none border-none object-contain [background-image:repeating-conic-gradient(#e6e7ed_0_25%,transparent_0_50%)] [background-position:50%] [background-size:28px_28px]"
          ></img>
        ) : (
          <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-6 px-6">
            {isDragging ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-base-content/75">
                <p className="text-base font-bold text-base-content">
                  عکس خود را اینجا رها کنید
                </p>
              </div>
            ) : (
              <>
                <form>
                  <label
                    htmlFor="image-input"
                    className="btn btn-primary text-base !font-bold"
                  >
                    عکس خود را انتخاب کنید
                    <CustomIcon
                      icon={RiAddCircleLine}
                      className="text-[24px]"
                    />
                  </label>

                  <input
                    accept=".png,.jpg,.jpeg"
                    onChange={async (e) => {
                      const file = e.currentTarget.files?.[0];

                      if (!file) return;

                      setImage({
                        base64: await imageToBase64Browser(file),
                        file,
                      });
                    }}
                    type="file"
                    className="hidden"
                    id="image-input"
                  />
                </form>

                <p className="text-base font-bold">
                  یا عکس خود را اینجا رها کنید
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {image && (
        <div
          className={cn(
            "mt-4 flex w-full flex-col flex-wrap justify-between gap-4 lg:flex-row",
            isPending && "pointer-events-none opacity-50",
          )}
        >
          <div className="flex items-center justify-center gap-4 max-lg:w-full">
            <div className="tooltip relative" data-tip="حذف عکس">
              <button
                onClick={() => setImage(null)}
                className="btn btn-square size-10 min-h-10"
              >
                <CustomIcon className="text-[20px]" icon={RiCloseLine} />
              </button>
            </div>

            <SelectEffect />
          </div>

          <div className="flex items-center justify-center gap-4 max-lg:w-full">
            <div className="tooltip" data-tip="دانلود عکس">
              <button
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = image.base64;
                  a.download = image.file.name ?? "output";

                  a.click();
                }}
                className="btn btn-square btn-outline btn-primary size-10 min-h-10"
              >
                <CustomIcon className="text-[20px]" icon={RiDownload2Line} />
              </button>
            </div>

            <button
              onClick={() => sendFile(image.file)}
              className="btn btn-primary h-10 min-h-10 max-lg:grow"
            >
              اعمال
              <CustomIcon className="!scale-x-100" icon={RiMagicLine} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditorComponent;
