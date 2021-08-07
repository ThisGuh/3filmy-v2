import Link from 'next/link';
import {
  Wrapper,
  MenuHeader,
  Nav,
  ItemList,
  Item,
} from 'components/Menu/Menu.style';
import Burger from 'components/Menu/Burger';
import Logo from 'components/Logo';
import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';
import { RiHome2Fill as HomeIcon } from '@react-icons/all-files/ri/RiHome2Fill';
import { MdMovie as MovieIcon } from '@react-icons/all-files/md/MdMovie';
import { MdMovieFilter as SeriesIcon } from '@react-icons/all-files/md/MdMovieFilter';

const NavItems = [
  { name: 'Strona Główna', to: '/', icon: <HomeIcon /> },
  { name: 'Filmy', to: '/filmy', icon: <MovieIcon /> },
  { name: 'Seriale', to: '/seriale', icon: <SeriesIcon /> },
];

function Menu() {
  const isBurger = useSelector((state: RootState) => state.isBurger);

  return (
    <Wrapper>
      <MenuHeader burger={isBurger}>
        <Burger />
        <Logo burger={isBurger} />
      </MenuHeader>
      <Nav burger={isBurger}>
        <ItemList>
          {NavItems.map(({ to, name, icon }) => (
            <Link href={to} key={name} passHref>
              <a>
                <Item>
                  {icon}
                  {name}
                </Item>
              </a>
            </Link>
          ))}
        </ItemList>
      </Nav>
    </Wrapper>
  );
}

export default Menu;
