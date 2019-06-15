import React from 'react';
import Layout from '../components/layouts/main';

const renderContent = _ => {
  return (
    <div>
      <p>This is the about page</p>
    </div>
  )
}


export default function About() {
  return <Layout content={renderContent()}/>
}
