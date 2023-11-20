/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Vegan } from "lucide-react";

export default function ProductPage() {
    return (
        <div className="grid grid-cols-5 gap-4">
            <Card className="w-[300px] mt-5">
                <CardHeader>
                    <CardTitle
                        style={{
                            position: "relative",
                            backgroundColor: "#f0f0f0",
                            padding: "10px",
                            width: "fit-content",
                            borderRadius: "0px 10px 10px 0px",
                            right: "30px",
                        }}
                    >
                        ถั่วงอก
                    </CardTitle>
                    <CardDescription>product code: BEAN01</CardDescription>
                </CardHeader>
                <CardContent>
                    <img
                        src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/01/06/mung-bean-sprouts-mung-beans-blue-white-linen-wooden-spoon-bamboo-mat.jpg.rend.hgtvcom.1280.1280.suffix/1641446297159.jpeg"
                        alt="Bean Sprouts"
                    />
                    <p className="mt-3">
                        💵 20 บาท / กิโล{" "}
                        <span className="text-slate-500"> ( 120 left. )</span>
                    </p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Add To Cart</Button>
                </CardFooter>
            </Card>
            {/* Add more cards as needed */}
        </div>
    );
}
