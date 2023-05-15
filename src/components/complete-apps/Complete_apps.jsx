import React from 'react'
// imgs
import first from "./imgs/Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";
import forth from "./imgs/Rectangle 22 (11).png";
import fifth from "./imgs/Rectangle 22.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [
        // 6 projects date
        {
            // get img from img folder
            img: first,
            langs: ["html", "css", "javascript", "react", "tailwind css"],
            title: "ChertNodes",
            disc: "Minecraft servers hosting ",
        },
        {
            img: second,
            langs: ["html", "css", "javascript", "Node.js"],
            title: "ProtectX",
            disc: "Discord anti-crash bot ",
        },
        {
            img: third,
            langs: ["html", "css", "javascript", "Node.js", "python"],
            title: "Kahoot Answers Viewer",
            disc: "Get answers to your kahoot quiz ",
        },
        {
            img: forth,
            langs: ["html", "css", "javascript"],
            title: "Kotik Bot",
            disc: "Discord anti-crash bot ",
        },
        {
            img: fifth,
            langs: ["html", "TS", "Vue", "Node.js", "Less"],
            title: "Portfolio",
            disc: "You’re using it rn ",
        },
        {
            img: forth,
            langs: ["html", "css", "javascript"],
            title: "Kotik Bot",
            disc: "Discord anti-crash bot ",
        },
    ];
    return (
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">/</span>
                        <span>projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
                        {/* cards */}
                        {projects.map(({ img, langs, title, disc }) => {
                            return (
                                <>
                                    <Project_card
                                        img={img}
                                        langs={langs}
                                        title={title}
                                        disc={disc}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complete_apps