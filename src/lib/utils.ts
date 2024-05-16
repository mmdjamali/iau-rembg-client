import { twMerge } from "tailwind-merge"
import { clsx, ClassArray } from "clsx"

export const cn = (...inputs: ClassArray) => twMerge(clsx(inputs))

export const jst = (...inputs: string[]) => inputs.join("")