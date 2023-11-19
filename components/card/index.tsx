/* eslint-disable @next/next/no-img-element */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Data } from "./data";
import { MenuSuggest } from "./type";
import Link from "next/link";
export default function CardSuggest() {
    const menuData: MenuSuggest[] = Data;
    return (
        <div className="grid grid-cols-5 gap-4">
            {menuData.map((menu) => (
                <Card key={menu.Id}>
                    <CardHeader>
                        <CardTitle>{menu.Title}</CardTitle>
                        <CardDescription>{menu.Description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img
                            src={menu.ImageUrl}
                            alt={menu.Title}
                        />
                    </CardContent>
                    <CardFooter>
                        <Link href={menu.Link}>
                            <Button>Read more..</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
