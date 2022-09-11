import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export interface DefaultLayoutProps {
}

export function DefaultLayout (props: DefaultLayoutProps) {
  return (
    <div className='page-wrapper full-width'>
      <Header/>
        <main>
          <Outlet />
        </main>
      <Footer/>
    </div>
  );
}
