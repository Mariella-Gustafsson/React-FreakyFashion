import FooterAccordion from "./FooterAccordion";
import FooterIcons from "./FooterIcons";
import FooterNavigation from "./FooterNavigation";

function Footer () {
  return (
    <>
    <FooterIcons />
    <div className="sm:hidden">
      <FooterAccordion />
    </div>
    <div className="hidden sm:block">
      <FooterNavigation />
    </div>
    </>
  )
}

export default Footer;