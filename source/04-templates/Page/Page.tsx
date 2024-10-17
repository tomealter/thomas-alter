import { JSX, ReactNode } from 'react';
import { MAIN_ID } from '../../00-config/constants';
import Main from '../../02-layouts/Main/Main';

interface PageProps {
  mainId?: string;
  title: string;
  children?: ReactNode;
  preContent?: ReactNode;
}

function Page({
  title,
  children,
  mainId = MAIN_ID,
  preContent,
}: PageProps): JSX.Element {
  return (
    <>
      {preContent}
      <Main id={mainId}>
        <h1>{title}</h1>
        {children}
      </Main>
    </>
  );
}

export default Page;
export type { PageProps };
