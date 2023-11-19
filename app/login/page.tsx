"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { login } from "@/features/api/user";
import { getAllProductByRemark } from "@/features/api/product";

export default function Login() {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

    return (
        <div className="flex justify-center content-center mt-4">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                    <TabsTrigger value="forget">Forget Password</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Sign in to your account | <a href="/forget" className="font-semibold">forget password ?</a></CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    const email = emailRef.current?.value;
                                    const password = passwordRef.current?.value;

                                    console.log({
                                        email,
                                        password,
                                    });

                                    login(email, password).then((data) => {
                                        const token = data.token;

                                        // save to localsotrage
                                        localStorage.setItem("token", token);
                                    });
                                }}
                            >
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    <Input type="email" id="name" defaultValue="" ref={emailRef} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input
                                        type="password"
                                        id="username"
                                        defaultValue=""
                                        ref={passwordRef}
                                    />
                                </div>

                                <Button type="submit" className="mt-4">
                                    Login
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>
                                Sign up to order our vargetable 🥗
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Username</Label>
                                <Input type="text" id="current" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input id="current" type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="current">Password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Comfirm password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Register</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="forget">
                    <Card>
                        <CardHeader>
                            <CardTitle>Forget Password</CardTitle>
                            <CardDescription>
                                Please input your email
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input type="email" id="current" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Confirm</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
