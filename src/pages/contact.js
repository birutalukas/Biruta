import React, { useState, useRef, Fragment } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import { ContentHalf, FlexContent } from "../containers/Content"
import styled from "styled-components"
import { Heading, TextContainer } from "../components/styled/TextContent"
import { graphql, useStaticQuery } from "gatsby"

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

    axios
      .post(
        "https://getform.io/f/da26ce7f-4b48-40f7-8aff-5fd86225003b",
        {
          name,
          email,
          subject,
          message,
        },
        { headers: { Accept: "application/json" } }
      )
      .then(response => {
        if (response.status === 200) {
          setEmailError(false)

          setResponse("Thank You! I will contact You shortly!")
        } else {
          setEmailError(true)
          setResponse("Something went wrong! Form was not submited!")
        }
      })
      .catch(error => console.log(error))
  }

  const {
    wp: {
      acfOptionsContact: {
        contactMe: { contactMeText },
      },
    },
  } = useStaticQuery(graphql`
    query Contact {
      wp {
        acfOptionsContact {
          contactMe {
            contactMeText
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet>
        <title>Contact Me | Lukas Biruta - Web Developer</title>
        <meta
          name="description"
          content="Contact Me | Lukas Biruta - Web Developer"
        />
      </Helmet>
      <Wrapper>
        <Container>
          <FlexContent>
            <ContentHalf paddingRight="5rem">
              <Heading>Contact me..!</Heading>
              <TextContainer>
                <div dangerouslySetInnerHTML={{ __html: contactMeText }} />
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
                    name={name}
                  />
                </FormGroup>
                <FormGroup half inputRight>
                  <Label htmlFor="userEmail">E-mail</Label>
                  <Input
                    id="userEmail"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="userSubject">Subject</Label>
                  <Input
                    id="userSubject"
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
                    name={subject}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="userMessage">Message</Label>
                  <Textarea
                    id="userMessage"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    name={message}
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
    </Fragment>
  )
}
export default Contact
