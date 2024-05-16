import { cn } from "../../lib/utils";
import { IconType } from "react-icons";
import { RiCircleLine } from "react-icons/ri";

type Props = {
  icon: IconType | undefined | React.ElementType;
  className?: string;
};

const CustomIcon = ({ icon, className }: Props) => {
  const IconElement = icon ?? RiCircleLine;
  return (
    <IconElement className={cn("text-[21px] rtl:scale-x-[-1]", className)} />
  );
};

export default CustomIcon;