import { useState } from "react";
import PageHeading from "../heading";

const SpeakerCard = ({
  title,
  speaker,
  image,
  isAnimated,

}: {
  title: string;
  speaker: string;
  image: string;
  isAnimated: boolean;
}) => (
  <div className={`speaker-card ${isAnimated && "move-animate"}`}>
    <h5 className="text-base ">{title}</h5>
    <h3 className="text-3xl font-bold">
      {speaker.split(" ")[0]}
      <br />
      {speaker.split(" ")[1]}
    </h3>
    <img className="" src={image} />
  </div>
);

const Speakers = () => {
  const [speakerState, setSpeakerState] = useState([
    {
      title: "Head of Digital Marketing, Interswitch",
      speaker: "Babatunde Fabio",
      image: "/imgs/speakers/1.png",
    },
    {
      title: "Co-Founder Gokuset",
      speaker: "Abidemi Babaleye",
      image: "/imgs/speakers/2.png",
    },
    {
      title: "CEO Forte Karis brands",
      speaker: "Nonso Ozuzu",
      image: "/imgs/speakers/3.png",
    },
    {
      title: "VP, International Growth and Expansion MAX",
      speaker: "Gbolahan Fadipe",
      image: "/imgs/speakers/4.png",
    },
    {
      title: "Card products and logistics, Moniepoint",
      speaker: "Philip Obianuju",
      image: "/imgs/speakers/5.png",
    },
  ]);
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <>
      <div className="flex gap-5">
        <div className="w-32">
          <button
            onClick={() => {
              setSpeakerState((prev) => [
                prev[prev.length - 1],
                ...prev.slice(0, -1),
              ]);
              setIsAnimated(true);
              setTimeout(() => setIsAnimated(false), 700);
            }}
            className=" p-3 mt-24 lg:mx-8 hover:bg-bgColor border-2 border-white rounded-full text-white hover:bg-gray-800 "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
            </svg>
          </button>
        </div>
        <div className="w-full">
          <PageHeading title="Meet our speakers" subtitle="well seasoned" />
        </div>
        <div className="w-32">
          <button
            onClick={() => {
              setSpeakerState((prev) => [...prev.slice(1), prev[0]]);
              setIsAnimated(true);
              setTimeout(() => setIsAnimated(false), 700);
            }}
            className="p-3 mt-24 lg:mx-8 hover:bg-bgColor border-2 border-white rounded-full text-white hover:bg-gray-800"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex gap-0 mx-auto container justify-center isolate">
        {speakerState.map((s, i) => (
          <SpeakerCard
            key={i}
            title={s.title}
            speaker={s.speaker}
            image={s.image}
            isAnimated={isAnimated}
          />
        ))}
      </div>
    </>
  );
};

export default Speakers;
