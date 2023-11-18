"use client";

import { useRef, FormEventHandler } from "react";
import { login } from "@/features/api/user";
import { getAllProductByRemark } from "@/features/api/product";
export default function Login() {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

    return (
        <div>
            <h1> Login </h1>
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
                <label>email</label>
                <input
                    className="bg-slate-500 text-white"
                    type="email"
                    ref={emailRef}
                />
                <label>password</label>
                <input
                    className="bg-slate-500 text-white"
                    type="password"
                    ref={passwordRef}
                />
                <button type="submit">Login</button>
            </form>

            <button
                onClick={() => {
                    const remark = "Product Feature";

                    getAllProductByRemark(remark).then((data) => {
                        console.log(data);
                    });
                }}
            >
                test call api get product by remark
            </button>
        </div>
    );
}
