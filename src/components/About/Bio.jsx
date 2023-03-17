import React from 'react';
import Section from '../Section';
import TopicBlock from './TopicBlock';

export default function Bio() {
  return (
    <Section title='Bio'>
      <TopicBlock 
        topicList={
          [{
            lead: '1991',
            text: 'Born in Osasco/São Paulo.',
          },
          {
            lead: '2019',
            text: 'Bachelor Degree in Linguistics at Universidade de São Paulo/USP.',
          },
          {
            lead: '2017-present',
            text: 'Working in Kronoos (Full-Stack Developer).'
          },
          {
            lead: '2021',
            text: 'Joined 42SP as a Cadet.',
          },
          {
            lead: '2022-present',
            text: 'Working as a freelancer.',
          },
        ]
        }
      />
    </Section>
  )
}
