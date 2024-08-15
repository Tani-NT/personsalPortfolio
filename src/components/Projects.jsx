import Image from "next/image";
import project1 from "../../public/image/project1_1.png";
import project1one from "../../public/image/project1_2.png";
import project2 from "../../public/image/project2_1.png";
import project2two from "../../public/image/project2_2.png";
import project3 from "../../public/image/project3_1.png";
import project3three from "../../public/image/project3_2.png";

export default function Project(){
    return(
        <main className="my-[5vw] px-[5vw] font-[poppins]">
            <h2 className="text-[4vw] text-center font-bold tracking-wider">My Projects</h2>
            <p className="text-center w-[50%] my-[1.5vw] ml-[20vw] text-[1.1vw] leading-[1.8vw]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div className="btns flex items-center justify-center gap-[1vw] my-[4vw]">
                <button className="text-[1.3vw] px-[1vw] py-[.5vw]  bg-[#F8F8F8] border-[#545454] border-[1px] rounded-md">All</button>
                <button className="text-[1.3vw] px-[1vw] py-[.5vw]  bg-[#F8F8F8] border-[#545454] border-[1px] rounded-md">UI/UX Design</button>
                <button className="text-[1.3vw] px-[1vw] py-[.5vw]  bg-[#FD6F00] text-white rounded-md">Web Design</button>
                <button className="text-[1.3vw] px-[1vw] py-[.5vw]  bg-[#F8F8F8] border-[#545454] border-[1px] rounded-md">App Dseign</button>
                <button className="text-[1.3vw] px-[1vw] py-[.5vw]  bg-[#F8F8F8] border-[#545454] border-[1px] rounded-md">Graphic Design</button>
            </div>
            <div className="projects flex gap-[2vw] px-[4vwgit]">
                
                <div className="w-[30%] relative">
                    <div>
                        <div className="absolute w-full h-[29vw] bg-[#FFEBDB] px-[1.5vw] rounded-lg"></div>
                        <Image className="absolute w-[15vw] left-[10%] top-[78px] z-[9999]" src={project1}/>
                        <Image className="absolute w-[15vw] h-[29vw] left-[35%]" src={project1one} />
                    </div>
                    <h4 className="absolute top-[320px] text-[#fd6f00] text-[1vw] my-[1vw]">Web Design</h4>
                    <h3 className="absolute top-[360px] font-bold text-[1.5vw]">AirCalling Landing Page Design</h3>
                </div>
                <div className="w-[30%] relative">
                    <div>
                        <div className="absolute w-full h-[29vw] bg-[#FFEBDB] px-[1.5vw] rounded-lg"></div>
                        <Image className="absolute w-[15vw] left-[10%] top-[73px] z-[9999]" src={project2}/>
                        <Image className="absolute w-[15vw] h-[29vw] left-[35%]" src={project2two} />
                    </div>
                    <h4 className="absolute top-[320px] text-[#fd6f00] text-[1vw] my-[1vw]">Web Design</h4>
                    <h3 className="absolute top-[360px] font-bold text-[1.5vw]">Business Landing Page Design</h3>
                </div>
                <div className="w-[30%] relative">
                    <div>
                        <div className="absolute w-full h-[29vw] bg-[#FFEBDB] px-[1.5vw] rounded-lg"></div>
                        <Image className="absolute w-[15vw] left-[10%] top-[73px] z-[9999]" src={project3}/>
                        <Image className="absolute w-[15vw] h-[29vw] left-[35%]" src={project3three} />
                    </div>
                    <h4 className="absolute top-[320px] text-[#fd6f00] text-[1vw] my-[1vw]">Web Design</h4>
                    <h3 className="absolute top-[360px] font-bold text-[1.5vw]">Ecom Web Page Design</h3>
                </div>
            </div>
        </main>
    )
}