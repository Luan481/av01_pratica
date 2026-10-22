import type { ButtonProps } from "../../types/button.types"

export default function Button({text, icon}: ButtonProps) {
  return (
    <button className="flex flex-row items-center bg-main-green text-white font-bold py-2 px-4 rounded-full gap-2">
        {icon} {text}
    </button>
  )
}