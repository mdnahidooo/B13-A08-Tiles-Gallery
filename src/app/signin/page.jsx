"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { RiResetRightFill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        // console.log({ data, error });

        if (!error) {
            toast.success("Signed in successfully!", {
                style: {
                    background: "rgba(245, 245, 220, 0.65)", // transparent cream
                    color: "#3D2B1F",
                    border: "1px solid rgba(224, 122, 95, 0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                },
            });
        } else {
            toast.error("Invalid email or password!", {
                style: {
                    background: "rgba(245, 245, 220, 0.55)",
                    color: "#3D2B1F",
                    border: "1px solid rgba(224, 122, 95, 0.6)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
                },
            });
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }



    return (
        <div className="flex items-center justify-center pb-12 pt-10 px-4">

            <Card className="border border-[#e5e5d8] mx-auto w-125 py-10 mt-5 bg-[#F5F5DC] shadow-md">
                <h1 className="text-center text-2xl font-bold">Sign In</h1>

                <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter you email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-[#E07A5F] text-white">
                            <Check />
                            Submit
                        </Button>

                        <Button type="reset" variant="secondary" className="text-[#E07A5F]">
                            <RiResetRightFill></RiResetRightFill>
                            Reset
                        </Button>
                    </div>
                </Form>

                <p className="text-center">Or</p>

                <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full'}><GrGoogle /> Sign In With Google</Button>

                <p className="mt-4 text-center">
                    <span className="text-gray-400">Do not have an account?{" "}</span>
                    <Link href={"/signup"} className="text-[#E07A5F]">
                        Register
                    </Link>
                </p>
            </Card>

        </div>

    );
}