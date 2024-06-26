/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <div className="px-5">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        className="h-auto w-full object-contain"
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
