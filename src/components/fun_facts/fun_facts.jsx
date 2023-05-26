import React from 'react'

const Fun_facts = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-[#C778DD]'>#</span>
                my-fun-facts
            </div>
            <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
                {/* left */}
                <div className=" flex justify-start gap-4 w-full md:w-[48%] flex-wrap">
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I like winter more than summer
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I often bike with my friends
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I was in Egypt, Poland and Turkey
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I’m still studing in school
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I’m still studing in school
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        My favorite movie is The Green Mile
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I don’t have any siblings
                    </div>
                </div>
                {/* right */}
                <div className=" flex justify-center items-center  w-full md:w-[48%]">
                    <img className=' w-[250px]' src={require("./imgs/Group 53.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fun_facts