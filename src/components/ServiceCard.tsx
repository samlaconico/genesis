import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ServiceCardParams = {
  title: string;
  description: string;
  img: string;
};

export default function ServiceCard({
  title,
  description,
  img,
}: ServiceCardParams) {
  return (
    <>
      <Link
        href={`services#${title}`}
        className="bg-cover brightness-100 flex-col text-center justify-center h-[30vw] w-screen md:w-[25vw] m-auto shadow-neutral-400 shadow-md hover:scale-[1.01] transition-transform"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-white/20 hover:bg-white/60 w-full h-full flex">
          <h1 className="text-2xl lg:text-4xl text-black uppercase font-semibold m-auto text-center font-poppins ">
            {title}
          </h1>
        </div>

        
      </Link>
    </>
  );
}
