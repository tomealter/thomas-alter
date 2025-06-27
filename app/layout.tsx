import '../source/00-config/index.css';

import outfit from '@/source/01-global/fonts/outfit';
import workSans from '@/source/01-global/fonts/work-sans';
import Frame from '@/source/02-layouts/Frame/Frame';
import { JSX, PropsWithChildren } from 'react';
import '../source/01-global/index.css';
import SiteContainer from '../source/02-layouts/SiteContainer/SiteContainer';
import Skiplink from '../source/03-components/Skiplink/Skiplink';
import '../source/06-utility/index.css';

function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en" className={`${workSans.variable} ${outfit.variable}`}>
      <body id="top">
        <>
          <Skiplink />
          <SiteContainer>
            <Frame />
            {children}
          </SiteContainer>
        </>
      </body>
    </html>
  );
}

export default RootLayout;
