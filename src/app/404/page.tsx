import { Link, useNavigate } from "react-router-dom";
import CustomIcon from "@/components/ui/custom-icon";

import { RiErrorWarningLine, RiArrowLeftLine } from "react-icons/ri";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex bg-base-100 h-svh flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center">
        <CustomIcon
          icon={RiErrorWarningLine}
          className="text-[75px] text-error"
        />

        <span className="mt-3 text-center text-lg font-bold">
          صفحه درخواستی وجود ندارد.{" "}
        </span>

        <span className="mt-1 text-center text-base-content/75">
          لطفاً با کلیک بر روی دکمه زیر به صفحه اصلی بروید.{" "}
        </span>

        <div className="mt-6 flex flex-col-reverse items-center gap-3 sm:flex-row">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-ghost"
          >
            <CustomIcon icon={RiArrowLeftLine} />
            بازگشت
          </button>

          <Link to={"/"} className="btn btn-primary">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;