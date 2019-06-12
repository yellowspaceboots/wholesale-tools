import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Backspace from '@material-ui/icons/Backspace'
import Assignment from '@material-ui/icons/Assignment'
import PersonAdd from '@material-ui/icons/PersonAdd'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import LogDialog from './LogDialog'
import SalesDialog from './SalesDialog'
import Button from '@material-ui/core/Button'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventCard from './EventCard'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'

const localizer = BigCalendar.momentLocalizer(moment)

const MyCalendar = props => (
  <div style={{ width: '75vh', height: '75vh' }}>
    <BigCalendar
      localizer={localizer}
      events={props.events}
      startAccessor='start'
      endAccessor='end'
    />
  </div>
)

const drawerWidth = 60

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const ResponsiveDrawer = (props) => {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [view, switchView] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logDialogOpen, setLogDialogOpen] = useState(false)
  const [salesDialogOpen, setSalesDialogOpen] = useState(false)
  const initialState = [
    {
      id: 0,
      title: 'My testing project name',
      start: new Date(),
      end: new Date(),
      salesman: 'Jon Busch',
      amount: '90,000.00'
    },
    {
      id: 1,
      title: 'My testing project name that\'s is really really long',
      start: new Date(),
      end: new Date(),
      salesman: 'Tex Tarango',
      amount: '900.00'
    }
  ]
  const [events, setEvents] = useState(initialState)
  const [editId, setEditId] = useState()

  const addEvent = (event) => {
    setEvents([
      ...events,
      {
        id: events.length,
        title: event.project,
        start: event.received,
        end: event.due,
        salesman: event.salesman,
        amount: event.amount
      }
    ])
  }

  function handleDrawerToggle () {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className={classes.toolbar} />
        <Divider />
        <List style={{ flex: 1 }}>
          <Tooltip title='New Request' placement='right'>
            <ListItem button onClick={() => setLogDialogOpen(true)}>
              <ListItemIcon>{<Assignment />}</ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip title='Add Salesman' placement='right'>
            <ListItem button onClick={() => setSalesDialogOpen(true)}>
              <ListItemIcon>{<PersonAdd />}</ListItemIcon>
            </ListItem>
          </Tooltip>

        </List>
        <Divider />
        <List>
          <Tooltip title='Log Out' placement='right'>
            <ListItem button onClick={() => props.login(false)}>
              <ListItemIcon>{<Backspace />}</ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </div>
    </React.Fragment>

  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap style={{ flexGrow: 1 }}>
            WES
          </Typography>
          <Button style={{ color: 'white', textDecoration: 'none' }}>
            Commercial Projects
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            style={{ overflowX: 'hidden' }}
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <LogDialog open={logDialogOpen} setDialogOpen={setLogDialogOpen} addEvent={addEvent} edit={editId || events.filter(event => event.id === editId)[0]} />
        <SalesDialog open={salesDialogOpen} setDialogOpen={setSalesDialogOpen} />
        <div className={classes.toolbar} />
        <Typography variant='h4' style={{ marginBottom: 30 }}>
          Commercial Projects
        </Typography>
        <Button onClick={() => switchView(!view)} color='primary' style={{ marginBottom: 10 }}>
          {view ? 'View List' : 'View Calendar'}
        </Button>
        {!view ? (
          <Grid container spacing={2} justify='stretch'>
            {events.map(event => <EventCard key={event.id} event={event} setEditId={setEditId} setLogDialogOpen={setLogDialogOpen} />)}
          </Grid>
        ) : (
          <MyCalendar events={events} />
        )}
      </main>
    </div>
  )
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
}

export default ResponsiveDrawer
