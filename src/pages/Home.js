import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { Card } from '../components/Card'
import Header from '../components/header'
import { PageContainer } from '../components/PageContainer'
import articles from './../data/articles.json'
import journalists from './../data/journalists.json';
import famouses from './../data/famouses.json'
import story from './../assets/images/story-bg.png';

const Home = () => {

  const { latestNews, lifeNews, fullWidth, inverted, stories, reviews, food, videos } = articles;

  return (
    <PageContainer>
      <section className="row article-container latest-news">
        <div className='main-news'>
          {
            latestNews.slice(0, 1).map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={'bottom'}
                  center
                  size={'half'}
                  showDescription
                  className={'main-article'}

                />
              )
            })}
        </div>
        <div className='grid-news'>
          {
            latestNews.slice(1, latestNews.length).map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={'top'}
                  size={"quarter"}
                  className={'article-' + index}
                />
              )
            })}
        </div>
      </section>


      <section className='bg-light famouses-section'>
        <div className='row'>
          {
            famouses.map((item, index) => {
              return (
                <div style={{ position: "relative", flex: 1 }}>
                  <span className='card-count' style={{ position: 'absolute' }}>{index + 1}</span>
                  <Card key={index} data={item} />
                </div>
              )
            })}
        </div>
      </section>


      <section className="article-container life-news">
        <div className='row'>
          {
            lifeNews.map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={'left'}
                  showDescription={index == 0}
                  size={index == 0 ? 'full' : "third"}
                  className={index == 0 ? 'main-article' : 'article-' + index}
                />
              )
            })}
        </div>
      </section>



      <section className='journalists-section bg-light'>
        <div className='row'>
          {
            journalists.map((item, index) => {
              return (
                <Card key={index} data={item} />
              )
            })}
        </div>
      </section>

      <section className="article-container full-article overlay-article">
        <div className='row'>
          <ArticleCard
            data={fullWidth[0]}
            image={'overlay'}
            showDescription
            size={'full'}
            center
          />
        </div>
      </section>

      <section className="article-container eaven-odd px-6 py-5">
        <div className='row'>
          {
            inverted.map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={index % 2 == 0 ? 'top' : 'bottom'}
                  size={"third"}
                  center
                  className={'article-' + index}
                />
              )
            })}
        </div>
      </section>

      <section className="bg-light article-container stories-articles">
        <h4 className='section-title'>One story, Two perspectives</h4>
        <div className='stories-container' style={{ backgroundImage: `url(${story})` }}></div>
        <div className='row'>
          {
            stories.map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={false}
                  size={"third"}
                  className={'article-' + index}
                  showDescription
                />
              )
            })}
        </div>
      </section>

      <section className="bg-light article-container eat-news px-6 py-5">
        <div className='row'>
          {
            reviews.map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={'top'}
                  size={"quarter"}
                  className={'article-' + index}
                />
              )
            })}
        </div>
      </section>

      <section className=" article-container food-article">
        <div className='row'>
          {
            food.map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={'left'}
                  size={"third"}
                  className={'article-' + index}

                />
              )
            })}
        </div>
      </section>

      <section className=" article-container videos-articles">
        <div className='row'>
          {
            videos.map((item, index) => {
              return (
                <ArticleCard
                  key={index}
                  data={item}
                  image={'top'}

                  center
                  className={'article-' + index}

                />
              )
            })}
        </div>
      </section>

    </PageContainer>
  )
}

export default Home