import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import NumberFormat from 'react-number-format'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'

const EventCard = ({ event, setEditId, setLogDialogOpen }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card style={{ display: 'flex', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#1e3f76' }}>
          <Typography align='center' color='textSecondary' style={{ color: 'white', width: 110 }} variant='h5'>
            {moment(event.end).format('MMM DD h:mm A')}
          </Typography>
        </div>
        <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <Typography style={{ flexGrow: 1 }} variant='h6' gutterBottom>
              {event.title}
            </Typography>
            <NumberFormat
              value={event.amount}
              displayType={'text'}
              thousandSeparator
              prefix={'$'}
              renderText={
                value => (
                  <Typography style={{ marginLeft: 20 }} variant='h6' gutterBottom>
                    {value}
                  </Typography>
                )}
            />
          </div>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1 }}>
                <Typography variant='subtitle2' color='textSecondary'>
            Request#: {event.id}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
            Received: {moment(event.start).format('LL')}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
            Salesman: {event.salesman}
                </Typography>
              </div>
              <div>
                <Tooltip title='Edit' placement='bottom'>
                  <IconButton aria-label='Next' onClick={() => {
                    setEditId(event.id)
                    setLogDialogOpen(true)
                  }}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>

              </div>
            </div>

          </div>

        </CardContent>
      </Card>
    </Grid>

  )
}

export default EventCard
