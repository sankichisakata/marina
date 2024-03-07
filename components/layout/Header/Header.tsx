import ContactBtn from "@/components/ui/Btn/ContactBtn";
import DrawerBtn from "@/components/ui/Btn/DrawerBtn";
import LogoBtn from "@/components/ui/Btn/LogoBtn";

const Header = () => {
  return (
    <header
      className="
      fixed z-50 
      w-full
      top-0 left-0
      bg-accent
      "
    >
      <nav
        className="
        flex justify-around items-center
        h-10
        "
      >
        <LogoBtn />
        <ContactBtn />
        <DrawerBtn />
      </nav>
    </header>
  );
};

export default Header;
