import React from 'react';

export default function Topic({ topic }: { topic: Topic}) {
  return (
    <div className='pt-1 pb-1'>
      <span className="font-bold">{topic.lead}</span>
      <span className='font-bold pr-1 pl-1'>|</span>
      {topic.text}
    </div>
  )
}
