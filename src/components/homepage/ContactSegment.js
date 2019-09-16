import React from "react"
import {
  Form,
  Container
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import '../../styles/main.css'

const ContactSegment = () => (
  <Container className='home__contact-form'>
    <Form name="contact" method="POST" data-netlify="true">
      <Form.Group widths='equal'>
        <Form.Input fluid label='Name' placeholder='Name' type="text" name='name'/>
        <Form.Input fluid label='Email' placeholder='Email' type="email" name='email'/>
      </Form.Group>
      <Form.TextArea label='Message' placeholder='I look forward to connecting with you!' name='message' />
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Form.Button type='submit'>Submit</Form.Button>
    </Form>
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </Container>
)

export default ContactSegment