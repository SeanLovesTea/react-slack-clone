import React from 'react'
import firebase from '../../firebase'
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon 
  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [ formData, setFormData ]= React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const handleChange = (e) => {
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
    console.log('handling it')
  }

  const handleSubmit = (e) => {
    console.log("submitted")
    console.log("email : ", email, "pass : ", password)
    e.preventDefault()
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(createdUser => {
      console.log(createdUser)
    })
    .catch(err => {
      console.error(err)
    })
  }

  const { username, email, password, passwordConfirmation} = formData
  
  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' icon color='orange' textAlign='center'>
          <Icon name='puzzle piece' color='orange' />
          Register
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input 
            fluid name='username'
            icon='user'
            iconPosition='left' 
            placeholder='Username' 
            onChange={(e) => handleChange(e)} 
            type='text' 
            value={username} 
            />

            <Form.Input 
            fluid name='email' 
            icon='mail' 
            iconPosition='left' 
            placeholder='Email Address' 
            onChange={(e) => handleChange(e)} 
            type='email' 
            value={email}/>

            <Form.Input 
            fluid name='password' 
            icon='lock' 
            iconPosition='left' 
            placeholder='Password' 
            onChange={(e) => handleChange(e)} 
            type='password' 
            value={password}
            />

            <Form.Input 
            fluid name='passwordConfirmation' 
            icon='repeat' 
            iconPosition='left' 
            placeholder='Password Confirmation' 
            onChange={(e) => handleChange(e)} 
            type='password' 
            value={passwordConfirmation} 
            />

            <Button 
            color='orange' 
            fluid size='large'
            onClick={(e) => handleSubmit(e)}
            >Submit
            </Button>

            <Message>Already a user? 
              <Link to="/login">Login</Link>
            </Message>
          </Segment>
        </Form>
      </Grid.Column>  
    </Grid>
  )
}

export default Register