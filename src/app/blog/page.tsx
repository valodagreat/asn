import React from 'react'
import BlogHero from '../../components/Hero/BlogHero'
import Footer from '../../components/Footer/Footer'
import RecentArticle from '../../components/RecentArticle/RecentArticle'

const Blog = () => {
  return (
    <main className="min-h-screen w-full">
        <BlogHero />
        <RecentArticle />
        <Footer />
    </main>
  )
}

export default Blog