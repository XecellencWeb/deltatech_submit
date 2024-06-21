import SimpleButton from "./buttons";

const PageCard = ({
  image,
  heading,
  desc,
  className,
}: {
  image: string;
  heading: string;
  desc: string;
  className?: string;
}) => {
  return (
    <div
      className={className + " flex flex-col gap-5  card-design justify-center"}
    >
      <img src={image} alt="page card image" />
      <h3 className="text-3xl font-bold text-center mb-2">{heading}</h3>
      <p className="text-center">{desc}</p>
      <SimpleButton buttonText="Apply" />
    </div>
  );
};

export default PageCard;
