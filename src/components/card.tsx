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
      <img className="h-56 object-cover" src={image} alt="page card image" />
      <h3 className="text-3xl font-bold text-center mb-2">{heading}</h3>
      <p className="text-center min-h-20">{desc}</p>
      <SimpleButton
        linkText="https://forms.gle/kj5mTRmjqEykYbqo9"
        buttonText="Apply"
      />
    </div>
  );
};

export default PageCard;
