import Link from 'next/link'
import { Nav, Ul, Li, Logo, AddBtn } from '../styles/GlobalStyled'

export const Navbar = () => {
  return (
    <header>
      <Nav>
        <div className='container'>
          <Ul>
            <Li>
              <Link href={'/'}>
                <Logo>NEXT | BLOG</Logo>
              </Link>
            </Li>
            <Li>
              <Link href={'/add-post'}>
                <AddBtn>Добавить статью</AddBtn>
              </Link>
            </Li>
          </Ul>
        </div>
      </Nav>
    </header>
  )
}
