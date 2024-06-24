

const Support = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-8 mb-20 overflow-clip">
        <b className="text-black text-center block mb-4">Our Sponsors</b>
    <div className="flex gap-10 sliding ">
      {
        [...Array(9*2)].map((_,i)=>(
            <img className="shrink-0 grow-0" key={i} src={`/imgs/support/${i%8 + 1}.svg`}/>
        ))
      }
    </div>
    </div>
  )
}

export default Support
