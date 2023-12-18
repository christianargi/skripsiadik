import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import Breadcrumb from "@layout/AdminLayout/Breadcrumb/Breadcrumb";
// import HeaderFeaturedNav from '@layout/AdminLayout/Header/HeaderFeaturedNav'
// import HeaderNotificationNav from '@layout/AdminLayout/Header/HeaderNotificationNav'
import HeaderProfileNav from "@layout/AdminLayout/Header/HeaderProfileNav";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
};

export default function Header(props: HeaderProps) {
  const { toggleSidebar, toggleSidebarMd } = props;
  const pathname = usePathname();

  const finalPathname = () => {
    console.log("pathname", pathname);
    const finalpathname = pathname.substring(1);

    if (pathname === "/") {
      return "Dashboard";
    } else {
      return finalpathname.charAt(0).toUpperCase() + finalpathname.slice(1);
    }
  };

  return (
    <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Link href="/" className="header-brand d-md-none bg-white">
          {/* <svg width="80" height="46">
            <title>CoreUI Logo</title>
            <use xlinkHref="/assets/brand/coreui.svg#full" />
          </svg> */}
          <Image
            src="/assets/img/loginLogo.png"
            width={80}
            height={80}
            alt=""
          />
        </Link>
        <div className="header-nav d-none d-md-flex" />
        <div className="header-nav ms-auto" />
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
      <div className="header-divider border-top my-2 mx-sm-n2" />
      <Container fluid>
        <div className="fs-5">{finalPathname()}</div>
      </Container>
    </header>
  );
}
