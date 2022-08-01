import React, { useState, useRef } from "react"
import axios from "axios"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import { ContentHalf, FlexContent } from "../containers/Content"
import styled from "styled-components"
import { Heading, TextContainer } from "../components/styled/TextContent"

const FormElement = styled.form`
  display: flex;
  flex-wrap: wrap;
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
  color: ${props => props.theme.buttonColor};
  display: block;
  transition: 2s ease-in;
`

const Input = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5rem;
  outline-color: ${props => props.theme.buttonColor};
  transition: 2s ease-in;
`
const Submit = styled(Input).attrs({
  type: "submit",
  value: "SUBMIT!",
})`
  cursor: pointer;
  background-color: #e85333;
  color: #ffffff;
  padding: 1rem;
  background-color: ${props => props.theme.buttonColor};
  transition: 2s ease-in;
`

const Textarea = styled.textarea`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5rem;
  outline-color: ${props => props.theme.buttonColor};
  transition: 2s ease-in;
  min-height: 6em;
`
const Message = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => (props.error ? "red" : "#24ccb4")};
  display: block;
`

const Contact = () => {
  const formRef = useRef()

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [subject, setSubject] = useState("")

  const [message, setMessage] = useState("")

  const [emailError, setEmailError] = useState(false)
  const [response, setResponse] = useState(null)

  const onSubmitHandler = e => {
    e.preventDefault()

    let bodyFormData = new FormData()
    bodyFormData.append("userName", name)
    bodyFormData.append("userEmail", email)
    bodyFormData.append("userSubject", subject)
    bodyFormData.append("userMessage", message)

    axios
      .post(
        "https://www.backend.biruta.lt/wp-json/contact-form-7/v1/contact-forms/4/feedback",
        bodyFormData
      )
      .then(response => {
        //handle success
        if (response.data.status === "mail_sent") {
          setEmailError(false)
          setResponse(response.data.message)
        } else {
          setEmailError(true)
          setResponse(response.data.message)
        }
        console.log("Success ", response)
      })
      .catch(err => {
        //handle error

        console.log("Err ", err)

        setEmailError(true)
        setResponse(err.message)
      })
  }

  return (
    <Wrapper>
      <Container>
        <FlexContent>
          <ContentHalf paddingRight="5rem">
            <Heading>Contact me..!</Heading>
            <TextContainer>
              <p>
                I'm baby kinfolk fanny pack subway tile voluptate et. Live-edge
                cray narwhal, sustainable street art excepteur wayfarers four
                dollar toast ipsum. Whatever cray synth mollit labore hammock
                farm-to-table quis kale chips flexitarian. Lyft shaman viral
                culpa. Waistcoat cupidatat neutra taiyaki. YOLO DIY ad
                lumbersexual. Enim portland whatever, knausgaard pinterest
                bicycle rights ennui narwhal heirloom keytar sriracha selfies
                skateboard kale chips.
              </p>
            </TextContainer>
          </ContentHalf>
          <ContentHalf>
            <FormElement ref={formRef} onSubmit={onSubmitHandler}>
              <FormGroup half inputLeft>
                <Label htmlFor="userName">Name</Label>
                <Input
                  id="userName"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </FormGroup>
              <FormGroup half inputRight>
                <Label htmlFor="userEmail">E-mail</Label>
                <Input
                  id="userEmail"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="userSubject">Subject</Label>
                <Input
                  id="userSubject"
                  onChange={e => setSubject(e.target.value)}
                  value={subject}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="userMessage">Message</Label>
                <Textarea
                  id="userMessage"
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                />
              </FormGroup>
              <FormGroup>
                <Submit />
                {response && emailError ? (
                  <Message error>{response}</Message>
                ) : (
                  <Message>{response}</Message>
                )}
              </FormGroup>
            </FormElement>
          </ContentHalf>
        </FlexContent>
      </Container>
    </Wrapper>
  )
}
export default Contact
