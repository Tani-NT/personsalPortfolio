import Image from "next/image";
import testimonial1 from "../../public/image/testimonial1.png";
import testimonial2 from "../../public/image/testimonial2.png";

export default function Testimonials(){
    return (
        <main className="mt-[5vw] w-full h-[180vh] font-[poppins] relative overflow-hidden">
            <div className="absolute top-[50%]">
                <h2 className="text-[4vw] text-center font-bold tracking-wider">Testimonials</h2>
                <p className="text-center w-[50%] my-[1.5vw] ml-[20vw] text-[1.4vw] leading-[1.8vw]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
                <div className="min-w-full h-[35vh] flex flex-nowrap my-[5vw] gap-[5vw]">
                    <div className="absolute -left-[50%] opacity-[.4] bg-[#F8F8F8] w-[65vw] p-[2vw] flex gap-[2vw] rounded-md">
                        <Image src={testimonial1} className="rounded-full w-[12vw] h-[12vw] object-cover" />
                        <div className="w-[75%] flex flex-col gap-[.5vw]">
                            <p className="text-[1.3vw] w-full leading-[1.8vw]"><span className="text-[#FD6F00] text-[2.5vw]"><i>"</i> </span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<sub className="text-[#FD6F00] text-[2.5vw]"><i> "</i></sub></p>
                            <h1 className="text-[1.4vw] font-extrabold">Name</h1>
                            <h4 className="text-[1.2vw]">CEO</h4>
                        </div>
                    </div>
                    <div className="absolute left-[17%] bg-[#F8F8F8] w-[65vw] p-[2vw] flex gap-[2vw] rounded-md">
                        <Image src={testimonial1} className="rounded-full w-[12vw] h-[12vw] object-cover" />
                        <div className="w-[75%] flex flex-col gap-[.5vw]">
                            <p className="text-[1.3vw] w-full leading-[1.8vw]"><span className="text-[#FD6F00] text-[2.5vw]"><i>"</i> </span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<sub className="text-[#FD6F00] text-[2.5vw]"><i> "</i></sub></p>
                            <h1 className="text-[1.4vw] font-extrabold">Name</h1>
                            <h4 className="text-[1.2vw]">CEO</h4>
                        </div>
                    </div>
                    <div className="absolute -right-[50%] opacity-[.4] bg-[#F8F8F8] w-[65vw] p-[2vw] flex gap-[2vw] rounded-md">
                        <Image src={testimonial2} className="rounded-full w-[12vw] h-[12vw] object-cover" />
                        <div className="w-[75%] flex flex-col gap-[.5vw]">
                            <p className="text-[1.3vw] w-full leading-[1.8vw]"><span className="text-[#FD6F00] text-[2.5vw]"><i>"</i> </span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<sub className="text-[#FD6F00] text-[2.5vw]"><i> "</i></sub></p>
                            <h1 className="text-[1.4vw] font-extrabold">Name</h1>
                            <h4 className="text-[1.2vw]">CEO</h4>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[1vw]">
                    <div className="bg-[#D9D9D9] w-[4vw] h-[1vw] rounded-full"></div>
                    <div className="bg-[#fd6f00] w-[4vw] h-[1vw] rounded-full"></div>
                    <div className="bg-[#D9D9D9] w-[4vw] h-[1vw] rounded-full"></div>
                    <div className="bg-[#D9D9D9] w-[4vw] h-[1vw] rounded-full"></div>
                </div>
            </div>
        </main>
    )
}