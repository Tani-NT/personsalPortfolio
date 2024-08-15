import Image from "next/image";
import logo from "../../public/image/logo.png";
import fb from "../../public/image/fb.png";
import twitter from "../../public/image/twitter.png";
import insta from "../../public/image/insta.png";
import linkedIn from "../../public/image/linkedIn.png";

export default function Footer(){

    return(
        <footer className="mt-[5vw]">
            <div className="mb-[5vw]">
                <h1 className="text-[4vw] text-center font-extrabold">Let's Design Together</h1>
                <p className="text-[1.5vw] mt-[1vw] mb-[3vw] text-center">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br /> netus in. Aliquet donec morbi convallis pretium
                </p>
                <div className="flex items-center justify-center gap-[1.5vw]">
                    <input className="px-[1.5vw] bg-[#F8F8F8] border-[#AFAFAF] border-[1px] py-[1vw] rounded-md" placeholder="Enter your email.." type="email" name="email" id="email" />
                    <button className="px-[2vw] text-white py-[1vw] rounded-md bg-[#fd6f00]">Contact Me</button>
                </div>
            </div>
            <div className="bg-[#F8F8F8] pt-[4vw]">
                <Image className="w-[15vw] ml-[43vw]" src={logo} alt="logo"/>
                <ul className="flex gap-[2vw] items-center my-[2.5vw] justify-center text-[1.3vw] font-medium">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="flex items-center my-[3vw] justify-center gap-[1.5vw]">
                    <Image className="w-[1.3vw] h-[1.3vw] object-cover" src={fb} alt="fb"/>
                    <Image className="w-[1.3vw] h-[1.3vw] object-cover" src={twitter} alt="twitter"/>
                    <Image className="w-[1.3vw] h-[1.3vw] object-cover" src={insta} alt="insta"/>
                    <Image className="w-[1.3vw] h-[1.3vw] object-cover" src={linkedIn} alt="linkedIn"/>
                </div>
                <div className="bg-[#545454] text-white text-center py-[1.5vw]">
                    <p className="text-[1.5vw]">&copy; <b className="text-[#fd6f00]">Mumoir </b> All Rights Reserved , Inc.</p>
                </div>
            </div>
        </footer>
    )
}