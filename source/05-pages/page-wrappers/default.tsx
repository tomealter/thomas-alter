import Frame from '@/source/02-layouts/Frame/Frame';
import { ReactNode, type JSX } from 'react';
import SiteContainer from '../../02-layouts/SiteContainer/SiteContainer';
import BackToTop from '../../03-components/BackToTop/BackToTop';
import Skiplink from '../../03-components/Skiplink/Skiplink';

interface PageWrapperProps {
  children?: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  return (
    <>
      <Skiplink />
      <SiteContainer>
        <Frame />
        {children}
      </SiteContainer>
      <BackToTop text="Back to Top" topElement="top" />
    </>
  );
}

export default PageWrapper;
