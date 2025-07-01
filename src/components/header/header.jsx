import { useMediaQuery } from "react-responsive";
import { MHeader } from "./mheader";
import { DHeader } from "./dheader";
import { toFill } from "../../toFill";


export const Header = () => {

  const name = toFill.data.profile.name;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' });

  return (
    <>
      {isTabletOrMobile && <MHeader name={name} />}
      {!isTabletOrMobile && <DHeader name={name} />}
    </>
  );
}