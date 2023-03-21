import React from 'react';

export default function SectionTitle({ title }: { title: string}) {
  return (
      <span className='font-serif-medium text-2xl border-b-4 border-y-black dark:border-y-white'>{title}</span>
  )
}
