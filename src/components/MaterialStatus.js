import React from 'react'
import Typography from '@material-ui/core/Typography'

const MaterialStatus = ({ title, ...props }) => {
  return (
    <React.Fragment>
      <div style={{ marginTop: 20 }}>
        <Typography variant='overline' color='textSecondary' style={{ marginBottom: 30, fontWeight: 600 }}>
          {title}
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default MaterialStatus
