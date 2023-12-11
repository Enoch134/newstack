import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { CreateCustomer } from './CreateCustomer';
import { EditCustomer } from './EditCustomer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Detail from './Detail';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.flash.min.js";
import * as jzip from "jszip";
import "pdfmake";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { pdfMake } from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function AllCustomer() {

 const [open, setOpen] = React.useState(false);
 const [open1, setOpen1] = React.useState(false);
 const [open2, setOpen2] = React.useState(false);
 const [open3, setOpen3] = React.useState(false);
 const [openMenu, setOpenMenu] = useState(null);
    
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    };

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
    };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
    };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
    };



 const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
    
    $("#stsTokenDisplay").DataTable().destroy();
     $(document).ready(function () {
       $("#stsTokenDisplay").DataTable({
         pagingType: "full_numbers",
         pageLength: 5,
         destroy: true,
         processing: true,
         dom: "Bfrtip",
         buttons: [
           {
             extend: "copy",
             className: "btn-blue",
           },
           {
             extend: "csv",
             className: "btn-green",
           },
           {
             extend: "excel",
             className: "btn-yellow",
           },
           {
             extend: "pdf",
             className: "btn-red",
           },
           {
             extend: "print",
             className: "btn-purple",
           },
         ],
         initComplete: function () {
           // Manually apply Tailwind CSS classes after DataTable initialization is complete
           $(".btn-blue").addClass("bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 ml-4");
           $(".btn-green").addClass("bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
           $(".btn-yellow").addClass("bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
           $(".btn-red").addClass("bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
           $(".btn-purple").addClass("bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
         },
       });
     });
 
    
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 50,
  p: 4,
};

  return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
       <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="flex items-end justify-end"
      >
        <Box sx={{ width: 900 }}>
          <EditCustomer/>
        </Box>
        </Modal>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="flex items-center justify-center"
      >
        <Box sx={{ width: 900, marginLeft:"200px" }}>
          <Detail/>
        </Box>
        </Modal>
           
         <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this staff member? This action is irreversible,
          and all associated data will be permanently removed. Please double-check your
          decision, ensuring that you have backed up any necessary information,
          before confirming the deletion.
          </Typography>
              </Box>
              
          </Modal>
          
          
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="flex items-center justify-center"
      >
        <Box sx={{ width: 900 }}>
          <CreateCustomer/>
        </Box>
    </Modal>
    <div className="flex justify-end -mt-15 ">
      <Button onClick={handleOpen} className="shadow-lg bg-blue-800 text-white rounded"><GroupAddIcon/></Button>
    </div>
     <TableContainer component={Paper} className='-mt-10'>
      <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table" id="stsTokenDisplay" className='shadow-2xl'>
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">
              <IconButton onClick={handleMenuClick}>
                <EllipsisVerticalIcon strokeWidth={3} fill="currentColor" className="h-6 w-6" />
              </IconButton>
                 <Menu
                   anchorEl={anchorEl}
                   open={Boolean(anchorEl)}
                   onClose={handleMenuClose}
                 >
                   <MenuItem onClick={handleOpen1}>
                     <Button startIcon={<EditIcon  />} style={{ color: 'blue' }}>Edit</Button>
                   </MenuItem>
                   <MenuItem onClick={handleOpen2}>
                     <Button startIcon={<InfoIcon />} style={{ color: 'orange' }}>Info</Button>
                   </MenuItem>
                   <MenuItem onClick={handleOpen3}>
                     <Button startIcon={<DeleteForeverIcon />} style={{ color: 'red' }}>Delete</Button>
                   </MenuItem>
                 </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </TableContainer>
    </div>
  );
}

export default AllCustomer;
