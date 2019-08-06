import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { accountsPassword } from '../App'

const GET_HELLO_WORLD = gql`
  {
    testing
  }
`
const HelloWorld = () => {
  const { data: { testing }, error } = useQuery(GET_HELLO_WORLD, { suspend: true })
  if (error) {
    return <div>Error! {error.message}</div>
  };
  return (
    <p>{testing}</p>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(/splash.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: 85,
    width: 85
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
/*
const CREATE_USER = gql`
mutation createUser($user: CreateUserInput!) {
  createUser(user:$user)
}
`
const LOGIN_USER = gql`
mutation loginUser($serviceName: String!, $params: AuthenticateParamsInput!){
  authenticate(serviceName: $serviceName, params: $params) {
    sessionId
    tokens {
      refreshToken
      accessToken
    }
  }
}
`
*/
const Splash = ({ login }) => {
  /*
  const user = useMutation(CREATE_USER, {
    variables: {
      user: {
        profile: {
          firstName: 'Jon',
          lastName: 'Busch'
        },
        username: 'yellowspaceboots',
        email: 'yellowspaceboots@gmail.com',
        password: 'test'
      }
    }
  })
  const loginUser = useMutation(LOGIN_USER)
  */
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const classes = useStyles()
  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon style={{ fontSize: 50, fontWeight: 100 }} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={() => login(true)}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={async () => {
                console.log(accountsPassword.login)
                try {
                  await accountsPassword.login({
                    password: password,
                    user: { email: email }
                  }).then(() => console.log('success!'))
                } catch (err) {
                  console.log({ error: err.message })
                }
              }}
            >
              Test
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <HelloWorld />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Splash
