import { ButtonProps } from "@/types/buttonProps";

export default function MainButton({
  children,
  className = "",

  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center justify-center p-[1px] rounded-full bg-mainButtonBorderGradient transition duration-300 ease-in-out active:scale-95 ${className}`}
    >
      <div className="w-full h-full px-4 py-[8.5px] rounded-full bg-mainButtonGradient text-14med text-lightBlue transition duration-300 ease-in-out">
        <span
          className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/20 via-blue/30 to-white/20 opacity-70 
  skew-x-[-40deg] group-[focus-visible]:left-[120%] xl:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
        />
        {children}
      </div>
    </button>
  );
}
