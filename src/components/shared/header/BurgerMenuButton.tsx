interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}

const firstLineBaseStyles = "top-0 left-0 opacity-100";
const firstLineTransformStyles = "rotate-45 top-[11px]";
const secondLineBaseStyles = "top-[8px] left-0";
const secondLineTransformStyles = "rotate-[-45deg] top-[11px]";
const thirdLineBaseStyles = "top-[16px] right-0";
const thirdLineTransformStyles = "bottom-[-2px] right-[3px] opacity-0";

export default function BurgerMenuButton({
  isHeaderMenuOpened,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="group relative z-[60] size-10 px-[6px] py-[10px] outline-none before:content-['']
             before:absolute before:-z-10 before:top-0 before:left-0 before:rounded-full before:size-10 before:opacity-0 before:transition 
             before:duration-1000 before:ease-out active:before:opacity-50 focus-visible:before:opacity-50 laptop:hover:before:opacity-50 
             before:bg-blue before:blur-[10px] supports-[backdrop-filter]:before:blur-[10px] will-change-transform"
    >
      <div className="w-full h-full rotate-0 ">
        <span
          className={`block absolute w-full h-[2.8px] rounded-md bg-white rotate-0 
                    transition duration-[600ms] ease-out ${
                      isHeaderMenuOpened
                        ? firstLineTransformStyles
                        : firstLineBaseStyles
                    }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[2.6px] rounded-md bg-white rotate-0 
                    transition duration-[600ms] ease-out ${
                      isHeaderMenuOpened
                        ? secondLineTransformStyles
                        : secondLineBaseStyles
                    }`}
        ></span>
        <span
          className={`block absolute right-0 w-full h-[2.8px] rounded-md bg-white rotate-0  
                    transition duration-[600ms] ease-out ${
                      isHeaderMenuOpened
                        ? thirdLineTransformStyles
                        : thirdLineBaseStyles
                    }`}
        ></span>
      </div>
    </button>
  );
}
