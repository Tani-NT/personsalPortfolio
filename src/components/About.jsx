import { Slider } from "@nextui-org/slider";

export default function About(){
    return(
        <main className="mt-[10vw] px-[5vw] font-[poppins] flex justify-between">
            <div className="w-[43%] min-h-full relative">
                <div className="absolute left-[23.5%] top-[8%] z-[9999] w-[20vw] h-[6vw] bg-[#FD6F0099]"></div>
                <div className="absolute w-[37vw] h-[37vw]  left-[.6vw] rounded-full border-[4px] shadow-zinc-300 shadow-inner border-r-slate-300 border-t-slate-300 border-l-slate-300"></div>
                <img className="absolute -top-[3%] left-[.5vw] rounded-b-full  border-b-[4px] border-transparent w-[97%] object-cover" src="https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__" alt="" />
            </div>
            <div className="w-[50%]">
                <h3 className="text-[4vw] leading-[4vw] font-bold">About Me</h3>
                <p className="text-[1.3vw] leading-[2vw] mt-[3vw]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                </p>
                <div>
                    <h4 className="text-[1.3vw] font-bold my-[1vw]">UX</h4>
                    <Slider color="warning" step={0.01} size="sm" hideValue minValue={0} maxValue={1} defaultValue={0.87}/>
                </div>
                <div>
                    <h4 className="text-[1.3vw] font-bold my-[1vw]">Website Design</h4>
                    <Slider color="warning" step={0.01} size="sm" hideValue minValue={0} maxValue={1} defaultValue={0.84}/>
                </div>
                <div>
                    <h4 className="text-[1.3vw] font-bold my-[1vw]">App Design</h4>
                    <Slider color="warning" step={0.01} size="sm" hideValue minValue={0} maxValue={1} defaultValue={0.96}/>
                </div>
                <div>
                    <h4 className="text-[1.3vw] font-bold my-[1vw]">Graphic Design</h4>
                    <Slider color="warning" step={0.01} size="sm" hideValue minValue={0} maxValue={1} defaultValue={0.88}/>
                </div>
            </div>
        </main>
    )
}