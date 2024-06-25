import { useState } from "react";

const testimonials = [
  [
    "Lorem ipsum dolor, sit amet consectetur adipisicing",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis, maxime debitis ut atque pariatur magni saepe! Sit, illum molestiae distinctio quidem suscipit nemo cupiditate consectetur. Similique officiis cum voluptas!",
    "Lorem ipsum dolor",
  ],
  [
    "Lorem ipsum dolor, sit amet consectetur adipisicing",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis, maxime debitis ut atque pariatur magni saepe! Sit, illum molestiae distinctio quidem suscipit nemo cupiditate consectetur. Similique officiis cum voluptas!",
    "Lorem ipsum dolor",
  ],
  [
    "Lorem ipsum dolor, sit amet consectetur adipisicing",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis, maxime debitis ut atque pariatur magni saepe! Sit, illum molestiae distinctio quidem suscipit nemo cupiditate consectetur. Similique officiis cum voluptas!",
    "Lorem ipsum dolor",
  ],
  [
    "Lorem ipsum dolor, sit amet consectetur adipisicing",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis, maxime debitis ut atque pariatur magni saepe! Sit, illum molestiae distinctio quidem suscipit nemo cupiditate consectetur. Similique officiis cum voluptas!",
    "Lorem ipsum dolor",
  ],
  [
    "Lorem ipsum dolor, sit amet consectetur adipisicing",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis, maxime debitis ut atque pariatur magni saepe! Sit, illum molestiae distinctio quidem suscipit nemo cupiditate consectetur. Similique officiis cum voluptas!",
    "Lorem ipsum dolor",
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
