import Image from "next/image";
import fb from "../../public/image/fb.png";
import twitter from "../../public/image/twitter.png";
import insta from "../../public/image/insta.png";
import linkedIn from "../../public/image/linkedIn.png";

export default function LandingPage(){
    return (
        <main className="mt-[5vw] px-[5vw] mb-[2vw] flex gap-[3vw] justify-between">
            <div className="w-[50%] py-[4vw]">
                <h3 className="font-extrabold text-[1vw]">Hi I am</h3>
                <h2 className="text-[#FD6F00] text-[1.4vw] font-semibold">Muhammad Umair</h2>
                <div className="text-[7vw] font-extrabold tracking-[3%] leading-[6vw]">
                    <h1>UI & UX</h1>
                    <h1 className="ml-[16vw]">Designer</h1>
                </div>
                <p className="text-[1.3vw] leading-[2vw] mt-[3vw]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="bg-[#FD6F00] px-[3.5vw] text-white py-[.5vw] mt-[1vw] rounded-md">Hire Me</button>
            </div>
            <div className="w-[43%] min-h-full relative">
                <div className="absolute left-[18%] -top-[2%] z-[9999] w-[25vw] h-[6vw] bg-[#FD6F0099]"></div>
                <div className="absolute rounded-full border-[4px] shadow-zinc-300 shadow-inner border-r-slate-300 border-b-[#ff8233] border-t-slate-300 border-l-slate-300 w-[100%] h-[100%] object-cover"></div>
                <img className="absolute -top-[15%] left-[.6vw] rounded-b-full  border-b-[4px] border-transparent w-[97%] object-cover" src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__" alt="" />
                <div className=" absolute top-[100%] left-[35%] flex items-center my-[1.5vw] justify-center gap-[1.5vw]">
                    <Image className="w-[2vw] h-[2vw] object-cover" src={fb} alt="fb"/>
                    <Image className="w-[2vw] h-[2vw] object-cover" src={twitter} alt="twitter"/>
                    <Image className="w-[2vw] h-[2vw] object-cover" src={insta} alt="insta"/>
                    <Image className="w-[2vw] h-[2vw] object-cover" src={linkedIn} alt="linkedIn"/>
                </div>
            </div>
        </main>
    )
}