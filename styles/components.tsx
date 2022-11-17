import styled from 'styled-components'
import { baseTheme } from './theme'
import { ImageProps } from '../interfaces'

export const Container = styled.div`
  max-width: ${baseTheme.sizes.container.maxWidth}px;
  width: ${baseTheme.sizes.container.width}%;
  margin: ${baseTheme.sizes.container.margin};
  padding: ${baseTheme.sizes.container.padding}px;
`
export const Nav = styled.nav`
  background-color: ${baseTheme.colors.thirdColor};
  padding: 17px 0;
`
export const Ul = styled.ul`
  position: relative;
`
export const Li = styled.li``
export const Logo = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${baseTheme.colors.firstColor};
  cursor: pointer;
`
export const AddBtn = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: ${baseTheme.colors.secondColor};
  background-color: ${baseTheme.colors.firstColor};
  box-shadow: 0px 10px 25px ${baseTheme.colors.shadowColor};
  border-radius: 10px;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%);
  max-width: 150px;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  @media (${baseTheme.media.large}) {
    top: 50px;
  }
`
export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const PostItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  @media (${baseTheme.media.extraLarge}) {
    justify-content: center;
  }
`
export const Post = styled.div`
  max-width: 350px;
  width: 100%;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background: url('${(props: ImageProps) => props.img}') center/cover no-repeat;
  transition: transform 1s ease;
  :hover {
    transform: scale(1.1);
  }
`
export const Img = styled.img`
  max-width: 540px;
  height: 315px;
  width: 100%;
  @media (${baseTheme.media.large}) {
    display: block;
    margin: 0 auto;
  }
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${baseTheme.colors.firstColor};
  padding: 15px 20px;
  position: absolute;
  // top:0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${baseTheme.colors.secondColor};
  border-radius: 0px 0px 15px 15px;
`
export const BackBtn = styled.a`
  background-color: ${baseTheme.colors.secondColor};
  box-shadow: 0px 10px 25px ${baseTheme.colors.shadowColor};
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${baseTheme.colors.firstColor};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
  outline: none;
  width: 117px;
  height: 45px;
  @media (${baseTheme.media.large}) {
    margin: 60px auto 30px auto;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  padding: 30px;
  max-width: 500px;
  width: 100%;
  background-color: ${baseTheme.colors.secondColor};
  border-radius: 15px;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid ${baseTheme.colors.primary};
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  font-size: 16px;
`
export const TextLable = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: ${baseTheme.colors.secondary};
  margin-bottom: 5px;
`
export const TextArea = styled.textarea`
  border: 1px solid ${baseTheme.colors.primary};
  border-radius: 5px;
  min-height: 150px;
  resize: none;
  outline: none;
  padding: 5px 10px;
  margin-bottom: 5px;
  font-size: 16px;
`
export const SubmitBtn = styled.button`
  background-color: ${baseTheme.colors.firstColor};
  box-shadow: 0px 10px 25px ${baseTheme.colors.shadowColor};
  border-radius: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${baseTheme.colors.secondColor};
  border: none;
  padding: 9px 37px;
  display: block;
  margin: 30px auto 0 auto;
  cursor: pointer;
`
export const PostsWrapper = styled.div`
  background-color: ${baseTheme.colors.thirdColor};
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  position: relative;
  @media (${baseTheme.media.large}) {
    margin-top: 20px;
    flex-direction: column;
  }
`
export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  padding: 30px;
`
export const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${baseTheme.colors.firstColor};
  margin-bottom: 25px;
`
export const PostDescr = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: ${baseTheme.colors.secondary};
`
export const RemoveBtn = styled(AddBtn)`
  background-color: ${baseTheme.colors.danger};
  top: 98%;
`
