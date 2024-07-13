import EditorComponent from "@/components/editor";
import { EditorContextProvider } from "@/components/editor/context";
import Header from "@/components/layout/header";

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-base-100">
      <Header />

      <div className="mx-auto flex max-w-screen-xl flex-col px-8 py-12 md:py-20">
        <h1 className="text-balance text-center text-4xl font-black !leading-normal lg:px-20 lg:text-7xl">
          حدف پس زمینه و رتوش عکس فقط با یک کلیک!
        </h1>

        <p className="mt-6 text-center text-xl text-base-content/75 lg:px-20">
          عکس مورد نظر خود را انتخاب کرده و افکت مد نظرتون رو بر آن اپلای کنید
        </p>

        <div className="relative mx-auto mt-16 w-full max-w-2xl ">
          <EditorContextProvider>
            <EditorComponent />
          </EditorContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
