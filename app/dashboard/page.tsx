"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/fontawesome-common-types";

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
  Avatar,
  Divider,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import React from "react";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
    <div className=" flex bg-gray-100 p-3 max-w-screen min-h-screen">
      <div className="p-5 rounded-md min-h-screen xl:p-5 left-0  shadow-md w-[250px] bg-white hidden md:block">
        <Link href={"/"}>
          <img src="/dark.png" alt="logo" />
        </Link>
        <Divider className="my-5"></Divider>
        <ul className="space-y-3 divide-x-2 divide-solid">
          <li>
            <Link href={"/"}>
              <div className=" bg-gray-200 rounded-md p-[7px] text-gray-500  shadow-gray-800 font-medium text-inherit flex items-center space-x-2">
                <img src="./svg/chart.svg" width={20} />
                <Divider orientation="vertical"></Divider>
                Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
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
      <div className="xl:ps-5 w-full">
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
            <NavbarBrand>
              <p className="font-bold text-inherit">1ACME</p>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
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
          <div className="text-inherit text-blue-950 font-bold text-3xl mt-5">
            DashBoard
          </div>
        </div>
      </div>
    </div>
  );
}
