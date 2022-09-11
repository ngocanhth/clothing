import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SideBar } from '../components';
import { TopBanner } from '../components/TopBanner';

export interface DefaultLayoutProps {
}

export function ShopLayout (props: DefaultLayoutProps) {
  return (
    <div className='page-wrapper columnleft-sidebar'>
      <Header/>
          <main>
            <TopBanner/>
            <Outlet />
          </main>
      <Footer/>
    </div>
  );
}
