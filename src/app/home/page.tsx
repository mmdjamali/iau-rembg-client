import EditorComponent from "@/components/editor";
import { EditorContextProvider } from "@/components/editor/context";
import CustomIcon from "@/components/ui/custom-icon";
import { RiGithubLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-base-100">
      <div className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/75 px-8 backdrop-blur">
        <header className="navbar mx-auto h-20 w-full max-w-screen-xl items-center justify-between">
          <div className="">لوگو</div>

          <nav></nav>

          <div>
            <button className="btn btn-neutral btn-sm">
              گیت‌هاب
              <CustomIcon icon={RiGithubLine} />
            </button>
          </div>
        </header>
      </div>

      <div className="mx-auto flex max-w-screen-xl flex-col px-8 py-20">
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
