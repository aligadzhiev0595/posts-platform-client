import Link from 'next/link'
import { Nav, Ul, Li, Logo, AddBtn, Container } from '../styles/components'

export const Navbar = () => {
  return (
    <header>
      <Nav>
        <Container>
          <Ul>
            <Li>
              <Link href={'/'}>
                <Logo>NEXT | CALLBOARD</Logo>
              </Link>
            </Li>
            <Li>
              <Link href={'/add-post'}>
                <AddBtn>Добавить статью</AddBtn>
              </Link>
            </Li>
          </Ul>
        </Container>
      </Nav>
    </header>
  )
}
