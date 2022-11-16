import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Navbar } from '../layouts/Navbar'
import {
  Wrapper,
  BackBtn,
  Form,
  FormWrapper,
  InputWrapper,
  TextLable,
  Input,
  TextArea,
  SubmitBtn,
  Container
} from '../styles/components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

const AddPost: NextPage = () => {
  const route = useRouter()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')

  const addPost = async () => {
    try {
      await axios
        .post('http://localhost:8080/api/post/add', { title, desc, image })
        .then(() => route.push('/'))
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Head>
        <title>Add-Post</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Navbar />
      <Wrapper>
        <Container>
          <BackBtn onClick={() => route.push('/')}>
            <Image
              src='/static/images/Vector.svg'
              alt='Picture of the author'
              width={24}
              height={15}
            />
            Назад
          </BackBtn>
          <FormWrapper>
            <Form onSubmit={(e) => e.preventDefault()}>
              <InputWrapper>
                <TextLable>Название статьи:</TextLable>
                <Input onChange={(e) => setTitle(e.target.value)} />
              </InputWrapper>
              <InputWrapper>
                <TextLable>Текст статьи:</TextLable>
                <TextArea onChange={(e) => setDesc(e.target.value)} />
              </InputWrapper>
              <InputWrapper>
                <TextLable>URL картинки:</TextLable>
                <Input onChange={(e) => setImage(e.target.value)} />
              </InputWrapper>
              <SubmitBtn onClick={addPost}>Добавить</SubmitBtn>
            </Form>
          </FormWrapper>
        </Container>
      </Wrapper>
    </>
  )
}

export default AddPost
