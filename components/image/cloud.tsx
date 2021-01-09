import Image from "next/image";

type Settings = {
  className: any,
  src: string,
  width: number,
  height: number,
  loading: any,
}

const ImageComponent = ({
  src,
  width,
  height,
  loading,
  className,
}: Settings) => {
  const hostUrl = `https://res.cloudinary.com/postCard/image/upload/q_100,w_${width},h_${height}`;
console.log(src)
  return (
    <Image
      className={className}
      src={src}
      alt="Picture of the author"
      width={width}
      height={height}
      layout="responsive"
      quality={10}
      loading={loading}
    />
  );
};

export default ImageComponent;