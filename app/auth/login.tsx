import { Button, Divider, Input } from "@nextui-org/react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="hidden sm:block bg-gradient-to-t rotate-20 animate-pulse from-green-500/20 via-yellow-600/10 to-purple-500/30 rounded-full w-[1000px] h-[200px] top-[90px] left-40 shadow-2xl blur-3xl z-20 absolute"></div>
      <div className="hidden sm:block bg-gradient-to-t rotate-20 animate-pulse from-red-400/20 via-purple-500/20 to-sky-500/20  w-full h-[200px] top-[200px]  z-10 absolute shadow-2xl blur-3xl"></div>
      <div className=" sm:bg-gray-200 w-screen h-screen place-content-center grid grind-cols-1 align-top text-white  ">
        <div className="bg-white sm:shadow-md p-5 backdrop-blur-xl rounded-md h-[500px] w-[385px]  text-xl font-bold z-30">
          <div className="pt-5">
            <img src="dark.png" width={150} />
            <div className="text-black  font-medium text-normal pb-5">
              Nice to see you again
            </div>
            <div className="space-y-2">
              <p className="font-normal text-[14px] text-gray-400 ps-2">
                E-mail
              </p>
              <Input
                labelPlacement="outside"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2 ">
              <p className="font-normal text-[14px] text-gray-400 ps-2">
                Password
              </p>
              <Input
                className="mt-5"
                labelPlacement="outside"
                type="email"
                placeholder="Password"
              />
            </div>
            <div className="flex text-black text-small font-normal items-center space-x-3 p-5 justify-between">
              <div className="flex items-center space-x-4">
                <input type="checkbox" />
                <p>Remenber me</p>
              </div>
              <div className="text-cyan-500 font-simebold">
                <Link href={"/"}>Forget Password?</Link>
              </div>
            </div>

            <div className="space-y-5">
              <Button
                className="b:block rounded-md"
                fullWidth={true}
                color="primary"
              >
                Sign in
              </Button>
              <Divider></Divider>
              <Button
                className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-blue-500 text-white"
                color="default"
                fullWidth={true}
              >
                Or Sign in whit Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
