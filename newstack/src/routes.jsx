import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { AllUsers } from "@/pages/users"
import { AllStaff} from "./pages/staff";
import { AllCustomer } from "./pages/customers";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PeopleIcon from '@mui/icons-material/People';



const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
    ],
  },
   {
    title: "Users Account",
    layout: "users",
    pages: [
      {
        icon: <PeopleAltIcon {...icon} />,
        name: "Users",
        path: "/allUsers",
        element: <AllUsers />,
      },
    ],
  },
  {
    title: "Staff Account",
    layout: "staff",
    pages: [
      {
        icon: <SupervisedUserCircleIcon {...icon} />,
        name: "Staff",
        path: "/allstaff",
        element: <AllStaff />,
      },
    ],
  },
        {
    title: "Customer",
    layout: "customers",
    pages: [
      {
        icon: <PeopleIcon {...icon} />,
        name: "Customer",
        path: "/allCustomer",
        element: <AllCustomer />,
      },
    ],
  },
];

export default routes;
