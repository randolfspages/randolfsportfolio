import Logo from './Logo';
import Nav from './Nav';
// import SocialMedia from './SocialMedia';
// import DropDownMenu from './DropDownMenu';
// import PortfolioLink from './PortfolioLink';

const Header = () => {
  return (
    <header className="flex gap-2 justify-between items-center text-stone-200 py-6 px-4 md:px-16 bg-black fixed right-0 left-0 top-0"
    style={{zIndex:100}}>
      {/* <PortfolioLink /> */}
      <Nav />
      <Logo />
      
      {/* <SocialMedia /> */}
      {/* <DropDownMenu /> */}
    </header>
  );
};

export default Header;
