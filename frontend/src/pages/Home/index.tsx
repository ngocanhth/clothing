import * as React from 'react';
import NewArrival from './components/NewArrival';
import TopSlider from './components/TopSlider';

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <div className='home-area container-fluid'>
       <TopSlider/>
       <NewArrival/>
    </div>
  );
}
