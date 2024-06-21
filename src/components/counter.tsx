

const PageCounter = ({
  property,
  value,
  unit,
}: {
  property: string;
  value: number;
  unit?: string;
}) => {
  return <div className="flex flex-col gap-10">
    <h4 className="">{property}</h4>
    <span className="">{value}{unit?unit:''}</span>
  </div>;
};

export default PageCounter;
