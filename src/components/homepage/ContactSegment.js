import React from "react"
import {
  Form,
  Container
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import '../../styles/main.css'

const ContactSegment = () => (
  <Container className='home__contact-form'>
    <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.TextArea label='About' placeholder='I look forward to connecting with you!' />
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Form.Button type='submit'>Submit</Form.Button>
    </Form>
    </Container>
)

export default ContactSegment