import React, { ReactElement } from 'react';

export default function About(): ReactElement<'div'> {
  return (
    <div id='about'>
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl'>
          Julio Akira
        </h1>
      </div>
      <div className='flex text-center justify-center'>
        <h2 className=''>
          Full Stack Web Developer Based in São Paulo
        </h2>
      </div>
    </div>
  );
}
