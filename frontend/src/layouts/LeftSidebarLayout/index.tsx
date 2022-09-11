import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SideBar } from '../components';
export interface DefaultLayoutProps {
}

export function LeftSidebarLayout (props: DefaultLayoutProps) {
  return (
    <div className='page-wrapper columnleft-sidebar'>
      <Header/>
          <main>
            {/* <SideBar/>
            <div className='main-column'>
              <Outlet />
            </div> */}
            <Outlet />
          </main>
      <Footer/>
    </div>
  );
}
