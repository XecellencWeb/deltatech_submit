export const ColorHeading = ({ text,withArrow}: { text: string,withArrow?:boolean }) => (
  <h3 className="md:text-4xl text-blue-500 mb-4 font-semibold flex gap-0">{text}{withArrow?<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="-rotate-45 my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>:''}</h3>
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
