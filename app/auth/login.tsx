// "use client";
import { Button, Divider, Input } from "@nextui-org/react";
import { Formik } from "formik";
import Link from "next/link";
import { service } from "../service/page";
import { useState } from "react";
import Keys from "../components/keys";
import Password from "../components/password";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";

export default function Login() {
  const [error, setError] = useState<Boolean>(false);
  const [load, setLoad] = useState<Boolean>(false);
  const [sms, setSms] = useState<String>("");

  const router = useRouter();
  return (
    <>
      <div className="hidden sm:block bg-gradient-to-t rotate-20 animate-pulse from-green-500/20 via-yellow-600/10 to-purple-500/30 rounded-full w-[1000px] h-[200px] top-[90px] left-40 shadow-2xl blur-3xl z-20 absolute"></div>
      <div className="hidden sm:block bg-gradient-to-t rotate-20 animate-pulse from-red-400/20 via-purple-500/20 to-sky-500/20  w-full h-[200px] top-[200px]  z-10 absolute shadow-2xl blur-3xl"></div>
      <div className=" sm:bg-zinc-200 w-screen h-screen place-content-center grid grind-cols-1 align-top text-white  ">
        <div className="bg-white sm:shadow-md p-5 backdrop-blur-xl rounded-md  w-[385px]  text-xl font-bold z-30">
          <div className="pt-5">
            <img src="dark.png" width={150} />
            <div className="text-black  font-medium text-normal pb-5">
              Nice to see you again
            </div>
            {error && (
              <div className="bg-red-500 rounded-sm font-bold text-base p-1 animate-pulse flex items-center gap-2">
                <img src="./svg/bell.svg" width={20} />
                {sms}
              </div>
            )}

            <Formik
              initialValues={{ username: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "O campo Username é obrigatório.";
                }
                if (!values.password) {
                  errors.password = "O campo Password é obrigatório.";
                }
                return errors;
              }}
              onSubmit={(values) => {
                setLoad(true);
                setError(false);
                service
                  .postDummy(values.username, values.password)
                  .then((d) => {
                    router.push("dashboard");
                    localStorage.setItem(
                      "auth_token",
                      JSON.stringify(d.data.token)
                    );
                    localStorage.setItem("user", JSON.stringify(d.data));
                  })
                  .catch((e) => {
                    setError(true);
                    setSms(e.response.data.message);
                  })
                  .finally(() => {
                    setLoad(false);
                  });
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className="space-y-2">
                    <p className="font-normal text-[14px] text-gray-400 ps-2">
                      E-mail
                    </p>
                    <Input
                      required
                      labelPlacement="outside"
                      type="text"
                      placeholder="Username"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.username}
                      name="username"
                      startContent={<Keys />}
                    />
                    {props.errors.username && (
                      <div className="font-normal text-[12px] ps-2 bg-zinc-900 text-white rounded-md animate-bounce">
                        {props.errors.username}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 ">
                    <p className="font-normal text-[14px] text-gray-400 ps-2">
                      Password
                    </p>
                    <Input
                      startContent={<Password />}
                      labelPlacement="outside"
                      placeholder="Password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      name="password"
                    />
                    {props.errors.password && (
                      <div className="font-normal text-[12px] ps-2 bg-zinc-900 text-white rounded-md animate-bounce">
                        {props.errors.password}
                      </div>
                    )}
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
                      isLoading={load}
                      type="submit"
                      className="b:block rounded-md"
                      fullWidth={true}
                      color="primary"
                    >
                      {load ? <>Verificando...</> : <> Sign in</>}
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
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
