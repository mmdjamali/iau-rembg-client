import { twMerge } from "tailwind-merge"
import { clsx, ClassArray } from "clsx"

export const cn = (...inputs: ClassArray) => twMerge(clsx(inputs))

export const jst = (...inputs: string[]) => inputs.join("")

export const imageToBase64Browser = async (file: File): Promise<string> => {
    const fileReader = new FileReader()

    const base64: string = await new Promise((resolve) => {
        fileReader.onload = () => {
            resolve(fileReader.result as string)
        }

        fileReader.onerror = () => {
            resolve("")
        }

        fileReader.readAsDataURL(file)
    })

    return base64 || ""
}