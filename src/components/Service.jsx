import Image from "next/image";
import uiLogo from "../../public/image/uiLogo.png";
import mobileLogo from "../../public/image/mobileLogo.png";
import graphicLogo from "../../public/image/graphicLogo.png";
import webLogo from "../../public/image/webLogo.png";

export default function Service(){
    return(
        <main className="mt-[5vw] px-[5vw] font-[poppins]">
            <h2 className="text-[4vw] text-center font-semibold tracking-wider">Services</h2>
            <p className="text-center w-[50%] my-[1.5vw] ml-[20vw] text-[1.3vw] leading-[1.8vw]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div className="service flex space-between gap-[2.5vw] mt-[2vw]">
                <div className="card bg-[#F8F8F8] rounded-md p-[2vw] w-[20vw]">
                    <Image className="w-[6vw] h-[6vw] my-[1vw]" src={uiLogo} alt="uiLogo"/>
                    <h4 className="text-[1.5vw] font-semibold my-[.5vw]">UI/UX</h4>
                    <p className="text-[1.2vw]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="card bg-[#F8F8F8] rounded-md p-[2vw] w-[20vw]">
                    <Image className="w-[6vw] h-[6vw] my-[1vw]" src={webLogo} alt="uiLogo"/>
                    <h4 className="text-[1.5vw] font-semibold my-[.5vw]">Web Design</h4>
                    <p className="text-[1.2vw]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="card bg-[#F8F8F8] rounded-md p-[2vw] w-[20vw]">
                    <Image className="w-[47px] h-[82px] my-[1vw]" src={mobileLogo} alt="uiLogo"/>
                    <h4 className="text-[1.5vw] font-semibold my-[.5vw]">App Design</h4>
                    <p className="text-[1.2vw]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="card bg-[#F8F8F8] rounded-md p-[2vw] w-[20vw]">
                    <Image className="w-[6vw] h-[6vw] my-[1vw]" src={graphicLogo} alt="uiLogo"/>
                    <h4 className="text-[1.5vw] font-semibold my-[.5vw]">Graphic Design</h4>
                    <p className="text-[1.2vw]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
            </div>
        </main>
    )
}