import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from './menuItems'
import image1 from "./images/product1.webp"
import image2 from "./images/product2.webp"
import image3 from "./images/product3.webp"
import image4 from "./images/product4.webp"
import image5 from "./images/product5.webp"
import image6 from "./images/product6.webp"
import image7 from "./images/product7.webp"
import image8 from "./images/product8.webp"
import Navbar from './Navbar'
// import image9 from "./images/product9.webp"
// import image10 from "./images/product10.webp"
 
const styles = {
  list: {
    width: 270,
    top:68,
    position:'fixed'
  },
  // listItem:{
  //   backgroundColor: '#FF6700',
  //   height:75,
  //   marginTop:-8,
  // },
  links: {
    textDecoration:'none',
  },
  // menuHeader: {
  //   textAlign: 'center',
  //   backgroundColor: '#FF6700'
  // },
  listItemText:{
    fontSize:'14px',//Insert your required size
    color:"black",
  }
};
class MenuBar extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
handleClick( item ) {
    this.setState( prevState => ( 
      { [ item ]: !prevState[ item ] } 
    ) )
  }
// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
handler( children ) {
    const { classes } = this.props
    const { state } = this
return children.map( ( subOption ) => {
      if ( !subOption.children ) {
        return (
          <div key={ subOption.name }>
            <ListItem 
              button 
              key={ subOption.name }>
              <Link 
                to={ subOption.url }
                className={ classes.links }>
                <ListItemText classes={{primary:classes.listItemText}}
                  inset 
                  primary={ subOption.name } 
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={ subOption.name }>
          <ListItem 
            button 
            onClick={ () => this.handleClick( subOption.name ) }>
            <ListItemText classes={{primary:classes.listItemText}}
              inset 
              primary={ subOption.name } />
            { state[ subOption.name ] ? 
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse 
            in={ state[ subOption.name ] } 
            timeout="auto" 
            unmountOnExit
          >
            { this.handler( subOption.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    const { classes, drawerOpen, menuOptions } = this.props
    return (
      <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">

         <div>
         <div className={classes.list}>
        <Drawer 
          variant="persistent" 
          anchor="left"
          open
          classes={ { paper: classes.list } }>
          <div>
            <List>
              <ListItem 
                key="menuHeading"
                // divider
                disableGutters
                className={classes.listItem}
              >
                <ListItemText
                className={ classes.menuHeader }
                  inset
                  // primary="All"
                  
                />
              </ListItem>
            { this.handler( menuItems.data ) }
            </List>
          </div>
        </Drawer>
      </div>


         </div>
        



        </div>

        <div className="col-md-10 mt-lg-3">
                        <div className="row">
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image2} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Fruits</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image3} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Nuts</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image4} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Meats</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
          
                        </div>

                        <div className="row">
                        <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image5} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Fishes</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image6} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Cooking Essentials</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image7} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Dairy,chilled & Eggs</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image8} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Frozen Snacks</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-2 mx-auto my-lg-3">
                                <div class="card">
                                    <img src={image9} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title">Vegetables</h5>
                                        <h5 class="card-title">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 mx-auto my-lg-3">
                                <div class="card">
                                    <img src={image10} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title">Vegetables</h5>
                                        <h5 class="card-title">Only for members</h5>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                      
        

                      </div>




        </div>
      </div>
     
      </>
    )
  }
}
export default withStyles(styles)(MenuBar)