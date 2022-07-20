import React, { useState } from "react"
import axios from "axios"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import { FlexContent } from "../containers/Content"

import styled from "styled-components"

const FormElement = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`

const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  margin: 0.5rem auto;
  width: ${props => (props.half ? "50%" : "100%")};

  padding-right: ${props => props.inputLeft && "0.25rem"};
  padding-left: ${props => props.inputRight && "0.25rem"};
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #e85333;
  display: block;
`

const Input = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5rem;
`
const Submit = styled(Input).attrs({
  type: "submit",
  value: "SUBMIT!",
})`
  cursor: pointer;
  background-color: #e85333;
  color: #ffffff;
`

const Textarea = styled.textarea`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5rem;
`
const Message = styled.label`
  margin-bottom: 0.5rem;
  color: #24ccb4;
  display: block;
`

const Contact = () => {
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [phone, setPhone] = useState("")

  const [subject, setSubject] = useState("")

  const [message, setMessage] = useState("")

  const [response, setResponse] = useState(null)

  const onSubmitHandler = e => {
    e.preventDefault()

    let bodyFormData = new FormData()
    bodyFormData.append("userName", name)
    bodyFormData.append("userEmail", email)
    bodyFormData.append("userPhone", phone)
    bodyFormData.append("userSubject", subject)
    bodyFormData.append("userMessage", message)

    axios({
      method: "post",
      url:
        "http://www.backend.biruta.lt/wp-json/contact-form-7/v1/contact-forms/4/feedback",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response)

        setResponse(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  return (
    <Wrapper>
      <Container>
        <FlexContent>
          <FormElement onSubmit={onSubmitHandler}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </FormGroup>
            <FormGroup half inputLeft>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </FormGroup>
            <FormGroup half inputRight>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                onChange={e => setPhone(e.target.value)}
                value={phone}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                onChange={e => setSubject(e.target.value)}
                value={subject}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
            </FormGroup>
            <FormGroup>
              <Submit />
              {response && response}
            </FormGroup>
          </FormElement>
        </FlexContent>
      </Container>
    </Wrapper>
  )
}
export default Contact
