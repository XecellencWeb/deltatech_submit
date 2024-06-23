import { useRef, useState } from "react";
import { InView } from "react-intersection-observer";

const PageCounter = ({
  property,
  value,
  unit,
}: {
  property: string;
  value: number;
  unit?: string;
}) => {
  const [counterValue, setCounterValue] = useState<number>(0);
  const play = useRef<number>(0);

  const playCounter = () => {
    play.current = setInterval(() => {
      setCounterValue((prev) => (prev !== value ? prev + 1 : value));
    }, 1);
  };

  const stopCounter = () => {
    clearInterval(play.current);
    setCounterValue(0);
  };

  return (
    <InView
      as="div"
      threshold={1}
      onChange={(inview) => {
        inview ? playCounter() : stopCounter();
      }}
      className="flex flex-col gap-5"
    >
      <h4 className="text-lg text-green-500 font-semibold">{property}</h4>
      <span className="text-5xl lg:text-7xl font-bold">
        {counterValue.toLocaleString()}
        {unit ? unit.toLocaleUpperCase() : ""}+
      </span>
    </InView>
  );
};

export default PageCounter;
