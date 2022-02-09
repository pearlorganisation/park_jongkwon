import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import image1 from "./images/footer-logo-1.webp"
import image2 from "./images/footer-logo-2.webp"
// import VisibleItemList from '../containers/VisibleItemList'

import Homeproducts from "./Homeproducts"
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#FFAE42',
    color:'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
function ResponsiveDrawer() {
  const dummyCategories = ['All', 'Vegetables', 'Fruits', 'Nuts', 'Meats', 'Fishes' , 'Cooking Essentials' , 'Dairy, Chilled & Eggs' , 'Frozen Snacks']

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <>
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
         
        </>
        ))}
      </List>
    </div>
  );
return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap className='header'>
          Ole0FreshBD 
          </Typography>
          <input type="email" placeholder="search for products " class="form-control navbar-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
  
                                        <a className="nav-link dropdown-toggle icon-anchor" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-home nav-home-icon"></i>     India
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                   
                                   
                                        <a className="nav-link icon-anchor">
                                            <i class="far fa-question-circle nav-help-icon"></i>Help</a>
                                  
                                  
                                        <button className="btn nav-link icon-anchor">
                                        <i className="fas fa-sign-in-alt nav-signin-icon"></i>Sign in</button>
                                   
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
<Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
        <Homeproducts />

        <div className="row">
                    <div className="col-md-12 mx-auto">
 
                     <div className="footer-div">
                         <div className="footer-anchors-div">
                         <a href="" className="footer-anchor mx-3">About Us</a>
                         <a href="" className="footer-anchor mx-3">Contact Us</a>
                         <a href="" className="footer-anchor mx-3">Join Us</a>
                         <a href="" className="footer-anchor mx-3">Terms & Privacy Policy</a>
                         <div className="mx-3 mt-lg-3">
                             <p>Copyright 2021 OLEOBD , All right reserved</p>
                         </div>
                         </div>
                         
                        
                         <div>
                         <h3 className="footer-heading">DOWNLOAD OLEOBD APP</h3>
                         <div class="footer-logo-div">
                             <img src={image1} class="footer-logo-1" alt="..." />
                             <img src={image2} class="footer-logo-1" alt="..." />
                         </div>
                     </div>
                     </div>

                     
                   
                    </div>
                </div>

      </div>
    </div>
  );
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default ResponsiveDrawer;