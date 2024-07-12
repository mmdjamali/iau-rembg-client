import { Effect, Image } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = {
  image: Image;
  setImage: React.Dispatch<React.SetStateAction<Image>>;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  effect: Effect | null;
  setEffect: React.Dispatch<React.SetStateAction<Effect | null>>;
  isPending: boolean;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
};

const context = createContext<ContextType>({} as ContextType);

export const EditorContextProvider = ({ children }: PropsWithChildren) => {
  const [isPending, setIsPending] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [image, setImage] = useState<Image>(null);
  const [effect, setEffect] = useState<Effect | null>({
    endpoint: "/api/remove-bg",
    name: "حذف بک گراند",
  });

  return (
    <context.Provider
      value={{
        image,
        setImage,
        isDragging,
        isPending,
        setIsDragging,
        setIsPending,
        effect,
        setEffect,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useEditorContext = () => {
  const state = useContext(context);

  if (!state) {
    throw "useEditorContext must be used inside EditorContextProvider";
  }

  return state;
};
