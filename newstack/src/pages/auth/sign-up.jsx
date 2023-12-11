import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export function SignUp() {
  const backgroundImageUrl = "/img/login.jpg";
  const logourl = "/img/cjlogo.png";
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-cover bg-center bg-opacity-100" style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
      }}>
        <div className="w-full lg:w-2/5 bg-white">
          <form className="mt-8 mb-4 mx-auto w-100 max-w-screen-lg lg:w-1/2  ">
            <div className="text-center">
            <img
            src={logourl}
            alt="CJBEM Logo"
            className="mx-auto mt-4 mb-2"
            style={{ maxWidth: "30%", height: "auto" }}
          />
            <Typography variant="h5" className="font-bold pb-2 pt-2">Sign Up</Typography>
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
            <Button className="mt-6 bg-blue-800" fullWidth type="submit">
              Sign Up
            </Button>

            <div className="flex items-center justify-between gap-2 mt-2 mb-4">
              <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 mb-4 ">
                Have an Account?
                <Link to="/" className="text-blue-800 ml-1">back to Login</Link>
              </Typography>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
