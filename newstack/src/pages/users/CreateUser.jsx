import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function CreateUser() {
//   const backgroundImageUrl = "/img/login.jpg";
  const logourl = "/img/cjlogo.png";
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-cover bg-center bg-opacity-100" >
        <div className="w-full lg:w-3/6 bg-white shadow-2xl -mt-15">
          <form className="mt-8 mb-4 mx-auto w-100 max-w-screen-lg lg:w-2/3  ">
            <div className="text-center">
            <img
            src={logourl}
            alt="CJBEM Logo"
            className="mx-auto mt-4 mb-2"
            style={{ maxWidth: "30%", height: "auto" }}
          />
            <Typography variant="h5" className="font-bold pb-2 pt-2">Create User</Typography>
          </div>
          
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium ">
                  First Name
                </Typography>
                <Input
                  size="sm"
                  autoComplete="name"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  
                />
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Last Name
                </Typography>
                <Input
                  size="sm"
                  autoComplete="name"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
           
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Email
                </Typography>
                <Input
                  size="sm"
                  autoComplete="email"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
          
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Phone
                </Typography>
                <Input
                  size="sm"
                  autoComplete="number"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
           
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Password
                </Typography>
                <Input
                  type="password"
                  autoComplete="password"
                  size="sm"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
         
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Confirm Password
                </Typography>
                <Input
                  type="password"
                  autoComplete="password"
                  size="sm"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
            <Button className="mt-6 bg-blue-800 mb-8" fullWidth type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateUser;
