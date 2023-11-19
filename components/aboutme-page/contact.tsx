/* eslint-disable @next/next/no-img-element */
"use client";
import { Bot, Building, Facebook, Instagram, Phone } from "lucide-react";
import { Fragment } from "react";
// import Map from "./map";

export default function Contact() {
    return (
        <Fragment>
            <p className="mt-5 mb-5 text-center text-[20px] font-semibold  italic">
                Contact us
            </p>
            <div className="flex items-center mb-5 ms-5">
                <Phone color="#000000" strokeWidth={1.5} />
                <span className="ml-2">064 - 716 - 6930</span>
            </div>
            <div className="flex items-center mb-5 ms-5">
                <Facebook color="#000000" strokeWidth={1.5} />
                <span className="ml-2">Sistered Classic</span>
            </div>
            <div className="flex items-center mb-5 ms-5">
                <Instagram color="#000000" strokeWidth={1.5} />
                <span className="ml-2">BeanZZ..</span>
            </div>
            <div className="flex items-center mb-5 ms-5">
                <Bot color="#000000" strokeWidth={1.5} />
                <span className="ml-2">@beannStz</span>
            </div>
            <div className="flex items-center mb-5 ms-5">
                <Building color="#000000" strokeWidth={1.5} />
                <span className="ml-2">Saraburi Thailand</span>
            </div>
            <div className="gg-map h-[220px] w-full">
                <img
                    src="https://www.visitsingapore.com/th_th/walking-tour/culture/city-hall-running-trail/jcr:content/par/mobile_21_content_sl/sliderccpar1/walking_trails/content/item0.thumbnail.mobile-map-img-path.560.315.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                />
                {/* <Map /> */}
            </div>
        </Fragment>
    );
}
