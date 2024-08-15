import Image from "next/image";
import logo from "../../public/image/logo.png";

export default function Navbar(){
    return (
        <nav className="w-full px-[5vw] flex items-center gap-[5vw] justify-between">
            <div className="flex gap-[.5vw] items-center">
            <Image className="w-[20vw] h-[5vw]" src={logo}/>
            </div>
            <div className="flex items-center font-[poppins] gap-[2vw] justify-between">
                <ul className="flex gap-[2vw] text-[1.3vw] font-medium">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="px-[1vw] py-[.5vw] text-[1.3vw] text-white rounded-md bg-[#FD6F00]">Download CV</button>
            </div>
        </nav>
    )
}
