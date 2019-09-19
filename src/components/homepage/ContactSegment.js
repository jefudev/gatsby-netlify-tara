import React from "react"
import {
  Form,
  Container,
  Label,
  Header
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import '../../styles/main.css'
import { navigate } from 'gatsby-link'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactSegment() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Container className='home__contact-form'>
      <Label color='pink' as='a' className="segment__header" style={{marginBottom: '30px'}}>
        <Header className="segmentHeaderTitle" as="span">
          Let's Get In Touch!
        </Header>
      </Label>
      <Form name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Name' type="text" name='name' onChange={handleChange} />
          <Form.Input fluid label='Email' placeholder='Email' type="email" name='email' onChange={handleChange} />
        </Form.Group>
        <Form.TextArea label='Message' placeholder='I look forward to connecting with you!' name='message' onChange={handleChange} />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
  </Container>
  )
}