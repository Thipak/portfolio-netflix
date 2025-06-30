import { useMediaQuery } from "react-responsive";
import { MHeader } from "./mheader";
import { DHeader } from "./dheader";


export const Header = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' });

  return (
    <>
      {isTabletOrMobile && <MHeader />}
      {!isTabletOrMobile && <DHeader />}
    </>
  );
}