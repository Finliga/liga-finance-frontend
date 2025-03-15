import { ButtonProps } from "@/types/buttonProps";
import IconLoader from "../icons/IconLoader";

export default function WhiteButton({
  children,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center justify-center px-4 py-[13.5px] border border-white text-14reg rounded-full transition duration-300 ease-out enabled:active:scale-95 
        bg-white text-black disabled:bg-transparent disabled:border-white/50 disabled:text-white/50
          
        ${isLoading ? "" : ""} 
        ${className}`}
    >
      <span
        className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/20 via-blue/30 to-white/20 opacity-70 
  skew-x-[-40deg] xl:group-enabled:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      {children}
      {isLoading ? <IconLoader /> : ""}
    </button>
  );
}
