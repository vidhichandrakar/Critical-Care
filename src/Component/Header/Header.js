import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../../Media/Images/Logo.png"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const pages = ['All Courses','Contact Us','About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [abc,setabc]=React.useState([])
  const handleChange=(e)=>{
    let arr = [];
   arr.push(...abc,e.target.value);
   console.log("abc",arr)
   setabc(arr)
  }

  return (
    <AppBar position="static">
      {console.log("hdgfh",abc)}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} width={200} height={50} />
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} style={{fontFamily:"Inter !important"}}>
                  <Typography textAlign="center" style={{color:"#000",fontFamily:"Inter !important",fontWeight:"600 !important"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Inter',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            
          <Box sx={{ minWidth: 240 ,height:"40px" }}>
      <FormControl size="small" sx={{width:180}}>
      <InputLabel id="demo-select-small-label" sx={{marginBottom:"1%"}}>All Courses</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="All Courses"
          placeholder='All Courses'
          // onChange={handleChange}
          sx={{color:"#000"}}
        >
          <MenuItem value={{a:"Abc",b:"bcd"}} style={{color:"#000"}}>All Courses</MenuItem>
          <MenuItem value={{a:"Ab3",b:"bcd"}} style={{color:"#000"}}>All Courses</MenuItem>
          <MenuItem value={{a:"Abc4",b:"bcd"}} style={{color:"#000"}}>All Courses</MenuItem>
          <MenuItem value={{a:"Abc5",b:"bcd"}} style={{color:"#000"}}>All Courses</MenuItem>
        </Select>
      </FormControl>
    </Box>
              <Typography
                key={"2"}
                onClick={handleCloseNavMenu}
                sx={{  color: 'black',fontFamily:"Inter" ,fontWeight:"600",marginLeft:"2%",fontSize:"1.1em",marginTop:"0.4%"}}
              >
                About Us
              </Typography>
              <Typography
                key={"3"}
                onClick={handleCloseNavMenu}
                sx={{  color: 'black',fontFamily:"Inter" ,fontWeight:"600",marginLeft:"2%",fontSize:"1.1em",marginTop:"0.4%"}}
              >
                Contact Us
              </Typography>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button variant="contained" width={30} height={30}>
                Login / Register
              </Button>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;