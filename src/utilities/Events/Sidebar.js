import * as React from "react";
import { useState } from "react";
import "./sidebar.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import man from "../../images/Group 11450.png";
import { MdLocationOn } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import Calendar from "moedim";

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [cal, setcal] = React.useState(false);
  const [value, setValue] = useState(new Date());
  const StyledCalendar = styled(Calendar)`
    --moedim-primary: #f00;
  `;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCalendar = () => {
    setcal((prev) => !prev);
  };
  return (
    <Box sx={{ display: "flex", color: "grey" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#24754F" }}
      >
        {/* <Toolbar style={{ paddingRight: "0" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="" className="topbar">
            <div>
              <h3>
                Gold Deposits - Events Exploration Page{" "}
                <h5>
                  Explore, Map, Analyse, Mine &amp; Extract. For best results,
                  <br /> Choose events from your category and focus!
                </h5>
              </h3>
            </div>
            <div>
              <img src={man} style={{ width: "100%" }} />
            </div>
          </Typography>
        </Toolbar> */}
        <div className="head-banner">
        <div className="banner-container">
        <div className="view-text">
              <h3>
                Gold Deposits - Events Exploration Page{" "}
              </h3>
              <h5 >
                  Explore, Map, Analyse, Mine &amp; Extract. For best results,
                  <br /> Choose events from your category and focus!
                </h5>
            </div>
          <div >
            <img src={man} />
          </div>
        </div>
      </div>
      </AppBar>
      <Drawer
      className="drawer" 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background:"#F6F6F6",
            color:"#666870",
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
              <div style={{width:"75%",margin:"auto"}}><h1>Filter</h1></div>

        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <div className="filter-sidebar">
        {/* <div style={{width:"75%",margin:"auto"}}><h1>Filter</h1></div> */}
        <div style={{width:"75%",margin:"auto"}}><h4>Modes</h4></div>
          <div className="mode">
            <div>
              <input type="checkbox" />
              <lable>Online</lable>
            </div>

            <div>
              <input type="checkbox" />
              <lable>In-person</lable>
            </div>

            <div>
              <input type="checkbox" />
              <lable>Hybrid</lable>
            </div>
          </div>
          <div style={{width:"75%",margin:"auto"}}><h4>Cateogary</h4></div>
          <div className="catogary">
            <select placeholder="Select here">
              <option placeholder="select here">1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
          <div style={{width:"75%",margin:"auto"}}><h4>Select a date</h4></div>
          <div className="calendar"><input value={value} onClick={handleCalendar} placeholder="Select start date"/></div>
          {cal == true ? (
            <Calendar value={value} onChange={(d) => setValue(d)} />
          ) : (
            ""
          )}
        </div>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className="card-container">
        {cardData.map((e) => (
              <div className="card" >
                <div className="card-1">
                  <small
                    style={{
                      margin: "20px  0 0 2rem",
                      fontSize: "1rem",
                      fontWeight: "900",
                      color: "green",
                    }}
                  >
                    {e.event_catogary}{" "}
                  </small>
                  <bold>{e.organizer}</bold>
                  <span>{e.location}</span>
                </div>
                <div className="card-2">
                  <small>
                    <MdLocationOn color="grey" size={20} />
                    {e.event_type}
                  </small>
                  <br />
                  <date>
                    {" "}
                    <MdWatchLater size={20} color="grey" />
                    {e.date}
                  </date>
                  <p></p>
                </div>
                <div className="desc">
                  <p>{e.desc}</p>
                </div>
                <div className="card-3">
                  <button>View Details</button>
                </div>
              </div>
            ))}
          {/* <div className="card">
            <div className="card-1">
              <small
                style={{
                  margin: "20px  0 0 2rem",
                  fontSize: "1rem",
                  fontWeight: "900",
                  color: "green",
                }}
              >
                Education{" "}
              </small>
              <bold style={{color:"black"}}>Indian Business School ,</bold>
              <span>Hyderabad</span>
            </div>
            <div className="card-2">
              <small>
                <MdLocationOn color="grey" size={20} />
                Online Event
              </small>
              <br />
              <date>
                {" "}
                <MdWatchLater size={20} color="grey" /> Jan 2 , 2023 | 12:31pm
              </date>
              <p></p>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sint consectetur nemo volup
              </p>
            </div>
            <div className="card-3">
              <button>View Details</button>
            </div>
          </div> */}

          <div className="card">
            <div className="card-1">
              <small
                style={{
                  margin: "20px  0 0 2rem",
                  fontSize: "1rem",
                  fontWeight: "900",
                  color: "green",
                }}
              >
                Education{" "}
              </small>
              <bold>Indian Business School ,</bold>
              <span>Hyderabad</span>
            </div>
            <div className="card-2">
              <small>
                <MdLocationOn color="grey" size={20} />
                Online Event
              </small>
              <br />
              <date>
                {" "}
                <MdWatchLater size={20} color="grey" /> Jan 2 , 2023 | 12:31pm
              </date>
              <p></p>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sint consectetur nemo volup
              </p>
            </div>
            <div className="card-3">
              <button>View Details</button>
            </div>
          </div>

          <div className="card">
            <div className="card-1">
              <small
                style={{
                  margin: "20px  0 0 2rem",
                  fontSize: "1rem",
                  fontWeight: "900",
                  color: "#24754F ",
                }}
              >
                Education{" "}
              </small>
              <bold>Indian Business School ,</bold>
              <span>Hyderabad</span>
            </div>
            <div className="card-2">
              <small>
                <MdLocationOn color="grey" size={20} />
                Online Event
              </small>
              <br />
              <date>
                {" "}
                <MdWatchLater size={20} color="grey" /> Jan 2 , 2023 | 12:31pm
              </date>
              <p></p>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sint consectetur nemo volup
              </p>
            </div>
            <div className="card-3">
              <button>View Details</button>
            </div>
          </div>
        </div>
      </Main>
    </Box>
  );
}


const cardData = [
  {
      event_catogary: "Education",
      organizer: "Indian Business School",
      location: "Hyderabad",
      event_type: "Online Event",
      date: "Jan 2 , 2023 | 12:31 pm",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
    },
    {
      event_catogary: "Education",
      organizer: "Indian Business School",
      location: "Hyderabad",
      event_type: "Online Event",
      date: "Jan 2 , 2023 | 12:31 pm",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
    },
    {
      event_catogary: "Education",
      organizer: "Indian Business School",
      location: "Hyderabad",
      event_type: "Online Event",
      date: "Jan 2 , 2023 | 12:31 pm",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
    },
    {
      event_catogary: "Education",
      organizer: "Indian Business School",
      location: "Hyderabad",
      event_type: "Online Event",
      date: "Jan 2 , 2023 | 12:31 pm",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
    },
    {
      event_catogary: "Education",
      organizer: "Indian Business School",
      location: "Hyderabad",
      event_type: "Online Event",
      date: "Jan 2 , 2023 | 12:31 pm",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
    },
{
  event_catogary: "Education",
  organizer: "Indian Business School",
  location: "Hyderabad",
  event_type: "Online Event",
  date: "Jan 2 , 2023 | 12:31 pm",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
},

{
  event_catogary: "Education",
  organizer: "Indian Business School",
  location: "Hyderabad",
  event_type: "Online Event",
  date: "Jan 2 , 2023 | 12:31 pm",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
},
];