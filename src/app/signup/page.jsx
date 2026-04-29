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
import { useRouter } from "next/navigation";
import { RiResetRightFill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function SignUpPage() {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        })

        console.log({ data, error })

        if (!error) {
            toast.success("Account created successfully!", {
                style: {
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)", // for Safari support
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#3D2B1F",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                },
                progressStyle: {
                    background: "#E07A5F",
                },
            });

            setTimeout(() => {
                router.push('/');
            }, 100);
        }
        else {
            toast.error("Account is already created", {
                style: {
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)", // for Safari support
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#3D2B1F",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                },
                progressStyle: {
                    background: "#E07A5F",
                },
            });
        }
    };

    return (
        <div className="flex items-center justify-center pb-20 pt-5 px-4">

            <Card className="border border-[#e5e5d8] mx-auto w-125 py-10 mt-5 bg-[#F5F5DC] shadow-md">

                <h1 className="text-center text-2xl font-bold text-[#3D2B1F]">
                    Sign Up
                </h1>

                <Form className="flex w-96 mx-auto flex-col gap-4 mt-4" onSubmit={onSubmit}>

                    <TextField isRequired name="name" type="text">
                        <Label className="text-[#3D2B1F]">Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="image" type="text">
                        <Label className="text-[#3D2B1F]">Image URL</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>

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
                        <Label className="text-[#3D2B1F]">Email</Label>
                        <Input placeholder="Enter your email" />
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
                        <Label className="text-[#3D2B1F]">Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description className="text-[#6b5b52]">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-[#E07A5F] text-white">
                            <Check />
                            Submit
                        </Button>

                        <Button type="reset" variant="secondary">
                            <RiResetRightFill></RiResetRightFill>
                            Reset
                        </Button>
                    </div>

                </Form>
                
            </Card>
        </div>
    );
}