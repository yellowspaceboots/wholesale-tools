import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const GET_REQUEST = gql`
  query getRequestQuery($id: Int!) {
    getRequest(id: $id) {
      id
      title
      start
      end
      salesman
      amount
      status
      customers
    }
  }
`

const Request = ({ title, match, ...props }) => {
  const id = parseInt(match.params.id)
  const { data: { getRequest }, error } = useQuery(GET_REQUEST, { suspend: true, variables: { id } })
  if (error) { return <div>Error! {error.message}</div> }
  return (
    <React.Fragment>
      <div style={{ marginTop: 20 }}>
        <Typography variant='overline' color='textSecondary' style={{ marginBottom: 30, fontWeight: 600 }}>
          {title} {id}
        </Typography>
        <Typography color='textSecondary' style={{ marginBottom: 30, fontWeight: 600 }}>
          {getRequest.title}
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default Request
