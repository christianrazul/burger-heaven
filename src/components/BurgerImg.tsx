interface BurgerImgProps {
  size: "sm" | "md";
  className?: string;
}

export const BurgerImg = ({ size, className }: BurgerImgProps) => {
  switch (size) {
    case "sm":
      return (
        <img
          src="./assets/burgir.webp"
          alt="burgir"
          className={`h-[356px] w-[414px] ${className}`}
        />
      );
    case "md":
      return (
        <img
          src="./assets/burgir.webp"
          alt="burgir"
          className={`${className}`}
        />
      );
    default:
      return <img src="./src/assets/burgir.webp" alt="burgir" />;
  }
};
