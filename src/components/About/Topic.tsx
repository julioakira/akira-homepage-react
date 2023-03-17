import React from 'react';

export default function Topic({ topic }: { topic: Topic}) {
  return (
    <div className='flex gap-2'>
      <span className="font-bold">{topic.lead}</span>
      <span className='font-bold'>|</span>
      <p className='pb-2'>{topic.text}</p>
    </div>
  )
}
