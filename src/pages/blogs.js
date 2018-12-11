import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Blog from '../components/blog'

const Blogs = () => (
  <Layout background="#fbfafc">
    <SEO title="Blogs" />
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {[
        {
          title:
            'First Post on this blog khasfjkhsa jksa dgjsajh gdksaj gsaj kghas',
          date: '11th December, 2018',
          body: `Gatsby does an incredible amount of cool stuff for you, automatically. This makes Gatsby an incredibly powerful, versatile tool. However, this broad depth of functionality can make it difficult to explain what Gatsby does in a concise and approachable way.

In this post, I’ll aim for the latter — an approachable explanation of what Gatsby does using a series of analogies that others have found helpful. I hope you do, too!

Start off with a pre-configured development environment and build process (high-performance car)
Benefit from built-in performance optimization (Neo’s Matrix skills)
Leverage static site delivery and web app experience (Compressed mattress)
Prefetch resources for snappy routing (Psychic delivery person)
Consolidate data sourcing and transformations (Amazon)`,
          link: '/blogs/first-post',
          author: 'Author',
        },
        {
          title:
            'First Post on this blog khasfjkhsa jksa dgjsajh gdksaj gsaj kghas',
          date: '11th December, 2018',
          body: `Gatsby does an incredible amount of cool stuff for you, automatically. This makes Gatsby an incredibly powerful, versatile tool. However, this broad depth of functionality can make it difficult to explain what Gatsby does in a concise and approachable way.

In this post, I’ll aim for the latter — an approachable explanation of what Gatsby does using a series of analogies that others have found helpful. I hope you do, too!

Start off with a pre-configured development environment and build process (high-performance car)
Benefit from built-in performance optimization (Neo’s Matrix skills)
Leverage static site delivery and web app experience (Compressed mattress)
Prefetch resources for snappy routing (Psychic delivery person)
Consolidate data sourcing and transformations (Amazon)`,
          link: '/blogs/first-post',
          author: 'Author',
        },
      ].map(post => (
        <Blog key={post.title + post.date} post={post} />
      ))}
    </div>
  </Layout>
)

export default Blogs
