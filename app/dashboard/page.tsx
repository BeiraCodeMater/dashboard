"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  image,
  Tooltip,
  Pagination
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { service } from "../service/page";
import { Product } from "../interface/page";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [protucts, setProtuscts] = useState<Product[]>([]);

  const get = async () => {
    await service.getDummy().then((e) => {
      setProtuscts(e.data.products);
    });
  };

  useEffect(() => {
    get();
  }, []);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out"
  ];

  return (
    <div className=" flex bg-gray-100 p-3 max-w-screen min-h-screen flex-row">
      <div className=" p-5 rounded-md min-h-screen xl:p-5 left-0  shadow-md w-[250px] bg-white hidden md:block">
        <Link href={"/"}>
          <img src="/dark.png" alt="logo" />
        </Link>
        <Divider className="my-5"></Divider>

        <ul className="space-y-3  divide-solid">
          <li>
            <Link href={"/"}>
              <div className=" bg-zinc-900 rounded-md p-[7px] text-white shadow-md  font-medium text-inherit flex items-center space-x-2">
                <img src="./svg/chart.svg" width={20} />
                <Divider orientation="vertical"></Divider>
                Dashboard
              </div>
            </Link>
          </li>
          <li className=" active:is">
            <Link href={"/dashboard"}>
              <div className="hover:bg-gray-200 rounded-md p-[7px] flex   hover:shadow-gray-800 font-medium text-inherit space-x-2">
                <img src="./svg/user.svg" width={20} />
                <Divider orientation="vertical"></Divider>
                Users
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div className="hover:bg-gray-200 rounded-md p-[7px] flex  text-gray-500  hover:shadow-gray-800 font-medium text-inherit space-x-2">
                <img src="./svg/settings.svg" width={20} />
                <Divider orientation="vertical"></Divider>
                Settings
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div className="hover:bg-gray-200 rounded-md p-[7px] flex  text-gray-500  hover:shadow-gray-800 font-medium text-inherit space-x-2">
                <img src="./svg/check.svg" width={20} />
                <Divider orientation="vertical"></Divider>
                Teams
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="xl:ps-5 w-full md:ps-5">
        <Navbar
          className="rounded-md bg-white shadow-md "
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          {/* <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">ACME02</p>
            </NavbarBrand>
          </NavbarContent> */}

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {/* <NavbarBrand>
              <p className="font-bold text-inherit">Home</p>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="#"></Link>
            </NavbarItem> */}
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger className="outline-none">
                  <Link href="#">
                    <User
                      name="Arnaldo Tomo"
                      description="Software Ingineer"
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/73796385?v=4"
                      }}
                    />
                  </Link>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">Profile</DropdownItem>
                  <DropdownItem key="new">Settings</DropdownItem>
                  <DropdownItem key="out" onClick={() => alert()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <div>
          <div className="flex items-center my-5 justify-between">
            <div className="text-inherit flex text-blue-950 font-bold text-3xl">
              DashBoard
            </div>

            <Button disabled color="primary" size="sm">
              <img src="./svg/check.svg" width={30} />
              User Vereficated
            </Button>
          </div>
          <div className="grid xl:grid-cols-4 gap-5  ">
            <div className="bg-white   outline-1 outline-red-200 rounded-md shadow-md p-4 ">
              <div className="flex justify-between items-center mb-2">
                <div className="bg-zinc-900 p-2  rounded-xl">
                  <img src="/svg/userplus.svg" width={30} />
                </div>
                <div className="">
                  <p>Money Today</p>
                  <p className="font-bold">$53K</p>
                </div>
              </div>
              <Divider className="m-x-4" />
              <div className="flex mt-2 items-center">
                <div className="text-green-500 font-bold">+55% </div>
                <div className="ms-2 text-sm">than last Week</div>
              </div>
            </div>
            <div className="bg-white  outline-1 outline-red-200 rounded-md shadow-md p-4">
              card1
            </div>
            <div className="bg-white  outline-1 outline-red-200 rounded-md shadow-md p-4">
              card1
            </div>
            <div className="bg-white  outline-1 outline-red-200 rounded-md shadow-md p-4">
              card1
            </div>
          </div>

          <div className="bg-white  rounded-xl w-full  mt-5 shadow-md">
            <div className="p-5 flex justify-between">
              <div>
                <Button color="primary" size="sm">
                  <img src="./svg/userplus.svg" width={20} />
                  Add User {protucts.length}
                </Button>
              </div>
              <div>
                <input
                  className="bg-gray-200 p-5 rounded-md w-[200px] h-[0px] outline-gray-400 font-normal text-sm"
                  placeholder="Procurar Usuario"
                />
              </div>
            </div>

            <Table
              isStriped
              shadow="none"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Category</TableColumn>
                <TableColumn>Price</TableColumn>
                <TableColumn>Stock</TableColumn>
                <TableColumn>Rating</TableColumn>
                <TableColumn>ACTION</TableColumn>
              </TableHeader>
              <TableBody>
                {protucts.map((e) => (
                  <TableRow key={`${e.id}`}>
                    <TableCell>{e.title}</TableCell>
                    <TableCell>{e.category}</TableCell>
                    <TableCell>{e.price * 64}MZN</TableCell>
                    <TableCell>{e.stock}</TableCell>
                    <TableCell>{e.rating}</TableCell>
                    <TableCell className="space-x-2">
                      <Button isIconOnly size="sm" color="primary">
                        <img src="./svg/eye.svg" width={20} />
                      </Button>
                      <Button isIconOnly size="sm" color="warning">
                        <img src="./svg/edit.svg" width={20} />
                      </Button>
                      <Tooltip
                        content={`${e.title}`}
                        color="danger"
                        placement="top-end"
                      >
                        <Button isIconOnly size="sm" color="danger">
                          <img src="./svg/trash.svg" width={20} />
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="place-content-center items-center flex pb-5">
              <Pagination showControls total={10} initialPage={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
