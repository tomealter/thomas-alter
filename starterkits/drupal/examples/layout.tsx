/**
 * @file
 * Example of an outer layout that uses the example header and footer.
 */

import '@/source/00-config/index.css';

import sourceSansPro from '@/source/01-global/fonts/source-sans';
import '@/source/01-global/index.css';
import SiteContainer from '@/source/02-layouts/SiteContainer/SiteContainer';
import Skiplink from '@/source/03-components/Skiplink/Skiplink';
import '@/source/06-utility/index.css';
import { graphql } from '@/types/drupal/__generated__';
import { query } from '@/util/drupal/drupal';
import { JSX, PropsWithChildren } from 'react';
import GlobalFooter from './layout/GlobalFooter.tsx';
import GlobalHeader from './layout/GlobalHeader.tsx';

/**
 * The root layout query only composes the fragments that are needed for the
 * layout, e.g. the global header and footer, NOT the fragments that are needed
 * for the page content. Because Next.js does not rerender the layout when the
 * page changes, we'll have two queries: one for the layout and one for the page.
 */
const getLayoutQuery = graphql(`
  query getLayout {
    ...GlobalHeaderFragment
    ...GlobalFooterFragment
  }
`);

/**
 * Component to render the root layout.
 *
 * Compare with the starter in app/layout.tsx. One thing to note is that because
 * the layout now includes data from Drupal, the function definition changes
 * from function RootLayout to async function RootLayout.
 */
async function RootLayout({
  children,
}: PropsWithChildren): Promise<JSX.Element> {
  const data = await query(getLayoutQuery);

  return (
    <html lang="en" className={sourceSansPro.variable}>
      <body id="top">
        <Skiplink />
        <SiteContainer>
          {data && <GlobalHeader data={data} />}
          {children}
          {data && <GlobalFooter data={data} />}
        </SiteContainer>
      </body>
    </html>
  );
}

export default RootLayout;
