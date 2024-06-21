export const ColorHeading = ({ text }: { text: string }) => (
  <h3 className="md:text-4xl text-blue-500 mb-4 font-semibold">{text}</h3>
);

export const PageHeading2 = ({
  title,
  subtitle,
  text2,
}: {
  title: string;
  subtitle: string;
  text2: string;
}) => {
  return (
    <div className="mb-12 flex max-lg:flex-col justify-center lg:justify-between  items-center">
      <div className="max-w-lg">
        <h2 className="text-5xl max-lg:text-center mb-4 font-bold">{title}</h2>
        <p className="max-lg:text-center">{text2}</p>
      </div>
      <div className="max-w-lg w-full">
        <p className="text-center">{subtitle}</p>
        <div className="flex gap-2 mt-2 max-w-lg w-auto justify-center mx-auto px-2">
          <div className="bg-blue-500 rounded-full w-full h-1"></div>
          <div className="bg-white rounded-full w-full h-1"></div>
        </div>
      </div>
    </div>
  );
};

const PageHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-5xl text-center mb-8 font-bold">{title}</h2>
      <p className="text-center">{subtitle}</p>
      <div className="flex gap-2 mt-2 max-w-lg w-auto justify-center mx-auto px-2">
        <div className="bg-blue-500 rounded-full w-full h-1"></div>
        <div className="bg-white rounded-full w-full h-1"></div>
      </div>
    </div>
  );
};

export default PageHeading;
