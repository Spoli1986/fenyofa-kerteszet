import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Logo from '../../assets/images/favicon.png'
import Background from '../../assets/images/trees-g5a526eec0_1920.jpg'


export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div class="flex md:justify-around items-center flex-col md:flex-row">
      <img src={Background} alt="Background" class="w-screen md:h-96 h-56" />
    
      <div class="flex flex-row items-center justify-between md:w-2/3 w-5/6 m-20 absolute top-0">
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            class="text-gray-200 md:text-2xl text-xl rounded-sm md:w-40 md:h-16 text-center md:mt-5"
          >
            
          Menü
          </Button>
          
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            class="md:w-40"
          >
            <MenuItem onClick={handleClose}><a href="/">Kezdőlap</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="/gallery">Galéria</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="/contactus">Kapcsolat</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="/findus">Útvonal</a></MenuItem>
          </Menu>
        </div>
        <div>
          <img src={Logo} alt="Logo" class="md:h-40 h-20 z-10" />
        </div>
      </div>
    </div>
  );
}