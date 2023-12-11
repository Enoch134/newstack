import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignIn() {
  const backgroundImageUrl = "/img/login.jpg";
  const logourl = "/img/cjlogo.png";
  return (
    <section className="flex gap-4 items-center justify-center h-screen bg-cover bg-center bg-opacity-100  "
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
         backgroundSize: "cover",
      }}
      
    >
      <div className="w-full lg:w-2/5 bg-white">
    
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-2/2">
          <div className="mb-1 flex flex-col gap-2">
          <div className="text-center ">
             <img
            src={logourl}
            alt="CJBEM Logo"
            className="mx-auto mt-4 mb-2"
            style={{ maxWidth: "30%", height: "auto" }}
          />
          <Typography variant="h5" className="font-bold pb-2 pt-2">Sign In</Typography>
        </div>
            <Typography variant="small" color="blue-gray" className="-pb-3 font-medium">
              email
            </Typography>
            <Input
              size="lg"
              autoComplete="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-pb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              autoComplete="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6 bg-blue-800" fullWidth type="submit">
            Sign In
          </Button>
            <Typography variant="small" className="font-medium text-red-800 text-center mt-2 mb-2">
              <a href="/dashboard/home">
                CLick Dashboard
              </a>
            </Typography>
          <div className="flex items-center justify-between gap-2 mt-2 mb-4">
            <Typography variant="small" className="font-medium text-blue-800 ">
              <a href="#">
                Forgot Pass?
              </a>
            </Typography>
                <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 mb-4 ">
            No Account?
            <Link to="/signup" className="text-blue-800 ml-1">create account</Link>
          </Typography>
          </div>
         
      
        </form>

      </div>
      {/* <div className="w-2/8 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div> */}

    </section>
  );
}
// backgroundImageUrl="../../../public/img/login.jpg"
export default SignIn;
