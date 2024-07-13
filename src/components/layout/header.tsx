import { RiGithubLine } from "react-icons/ri";
import CustomIcon from "../ui/custom-icon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/75 px-8 backdrop-blur">
      <header className="navbar mx-auto h-20 w-full max-w-screen-xl items-center justify-between">
        <div className="">
          <img src="/icon.svg" className="size-10" />
        </div>

        <nav></nav>

        <div>
          <button className="btn btn-neutral btn-sm">
            گیت‌هاب
            <CustomIcon icon={RiGithubLine} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
