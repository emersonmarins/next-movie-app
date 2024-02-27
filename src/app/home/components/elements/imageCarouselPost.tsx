import Image from "next/image"

export default function ImageCarousel(options: any) {
  return (
    <Image
      src={options.options.src}
      alt="imagem de capa de filme"
      className="dark:invert"
      width={240}
      height={240}
      priority
      style={{
        width: options.options.width,
        height: options.options.height,
        objectFit: 'cover',
      }}
    />
  )
}