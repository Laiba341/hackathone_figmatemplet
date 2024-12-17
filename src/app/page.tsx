import React from 'react';
import Hero from '@/components/hero ';
import Pick from '@/components/pick';
import Card from '@/components/card'; 




const Page = () => {
  return (
    <div className='bg-slate-100'>
      <Hero />
      <Pick />
      <Card/>
     
    </div>
  );
};

export default Page;
