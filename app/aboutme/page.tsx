/* eslint-disable jsx-a11y/alt-text */
import Contact from "@/components/aboutme-page/contact";

/* eslint-disable @next/next/no-img-element */
export default function AboutMe() {
    return (
        <div className="container grid grid-rows-3 grid-flow-col gap-4 rounded-lg p-[30px] mt-5">
            <p className="text-[40px] text-center">ABOUT US</p>
            <div className="row-start-2 row-span-2 h-[450px] shadow-md">
                <img
                    src="https://woonheng.com/wp-content/uploads/2021/01/Mung-Bean-Sprouts-scaled.jpg"
                    className="w-full h-full object-cover "
                    alt=""
                />
            </div>
            <div className="row-end-3 row-span-2 bg-white shadow-md ">
                <Contact />
            </div>
            <div className="row-start-1 row-end-4 bg-white shadow-md ">
                <img
                    src="https://freepngimg.com/save/68363-timeline-infographic-information-download-hq-png/1000x1000"
                    className="h-[600px]"
                />
                <p className="italic text-[20px] font-semibold text-center ">
                    History
                </p>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Facere quia reiciendis <br />
                    omnis, blanditiis nihil quos voluptates vel <br /> nemo, eveniet
                    repellat ea esse deserunt soluta <br /> voluptatum quae a at, odit
                    aliquam.
                </p>
            </div>
        </div>

    );
}
