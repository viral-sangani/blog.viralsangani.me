import React from 'react'
import Layout from '../components/layout'
import Subscribe from '../components/Subscribe'

export default function SubscribePage() {
  return (
    <Layout location={'subscribe/'} title={'Subscribe to Viral Sangani blog.'}>
      <section className="bg-light-background dark:bg-dark-background pt-10">
        <div className="flex flex-col mx-auto relative max-w-screen-lg px-4 sm:px-6 lg:px-20 py-4">
          <Subscribe />
        </div>
      </section>
    </Layout>
  )
}
