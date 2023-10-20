import Image from "next/image";

interface Props {
  img: any;
  title: string;
  description: string;
}

const ServiceCard = ({ img, title, description }: Props) => {
  return (
    <div className="mb-10 bg-orange-300 px-8 py-5 flex justify-center items-center flex-col rounded-xl">
      <div className="bg-orange-400 p-5 rounded-full flex justify-center items-center">
        <Image src={img} alt={title} width={55} />
      </div>
      <h2 className="text-lg font-bold mt-3 text-center">{title}</h2>
      <p className="text-center text-slate-900">{description}</p>
    </div>
  );
};

export default ServiceCard;
