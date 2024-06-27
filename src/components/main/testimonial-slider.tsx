import { useState } from "react";

const testimonials = [
  [
    "I Gained insights and connection through this program",
    "I was blown away by the caliber of speakers and attendees at this year's tech summit. The insights and connections I gained were invaluable!",
    "- Esther, Front and Backend Developer",
  ],
  [
    "The program was a game-changer for my business",
    "The tech summit was a game-changer for my business. I learned about the latest trends and innovations, and made some fantastic new connections.",
    " - David, Tech Enthusiast",
  ],
  [
    "I entered a new level in my career as a result of the program",
    "The summit was incredibly well-organized and the keynote speakers were inspiring. I left feeling motivated and equipped with new ideas to tackle our company's biggest challenges.",
    "- Emily, Software Engineer",
  ],
  [
    "I gained new skills that changed my work experience",
    "The tech summit was a fantastic opportunity to network with other professionals in the field and learn about the latest advancements in technology. I'm already looking forward to next year's event!",
    "- James, front end developer",
  ],
  [
    "I gained knowledge into a new level in my career",
    "The summit is a must-attend event for anyone in the tech industry. The panels, workshops, and keynotes were all top-notch and provided a wealth of knowledge and insights.",
    "- Gabriel, Tech Enthusiast",
  ],
];

const TestimonialSlider = () => {
  const [current,setCurrent] = useState(0)

  return <div className="w-screen overflow-clip mb-4 relative">
    <div className="flex justify-between w-[98.5vw] absolute lg:-translate-y-1/2 translate-y-3/4 top-1/2 z-[5]">
        <img className="max-lg:w-12" src="/imgs/arrow-left.svg" onClick={()=>setCurrent(prev=>prev==0?testimonials.length-1:prev-1)}/>
        <img className="max-lg:w-12" src="/imgs/arrow-right.svg" onClick={()=>setCurrent(prev=>prev==testimonials.length - 1?0:prev+1)}/>
    </div>
    <div className={`flex slider`} style={{
        ['--current' as string]: current
    }}>
    {
        testimonials.map((a,i)=>(
            <div key={i} className="grid lg:grid-cols-3 w-screen shrink-0 grow-0">
                <div className="bg-white p-20">
                    <img src="/imgs/testimonies/1.png" className=" w-56 lg:w-72 rounded-full block mx-auto"/>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-5 py-12 lg:py-40 lg:pr-56 px-2 lg:px-20 bg-green-500 quotes">
                    <h4 className="font-bold lg:text-2xl max-lg:text-center uppercase">{a[0]}</h4>
                    <p className="font-semibold max-lg:text-center">{a[1]}</p>
                    <p className="font-semibold max-lg:text-center">{a[2]}</p>
                    
                </div>
            </div>
        ))
    }
    </div>
  </div>;
};

export default TestimonialSlider;
