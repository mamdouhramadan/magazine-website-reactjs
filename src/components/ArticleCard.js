import React from 'react'
import { getColWidth } from '../helpers';
import VideoPlayer from './VideoPlayer';

const ArticleCard = ({ data, image, center, size, className, showDescription }) => {

  const gridSize = getColWidth(size);
  const contentCenter = center ? 'content-center' : '';
  const imagePosition = image && 'image-' + image;
  const imageBackground = image == 'overlay' && data.image;

  return (
    <div className={`article ${gridSize} ${className || ''}`}>
      <div
        className={`article-card card-hover ${contentCenter} ${imagePosition}`}
        style={{ backgroundImage: imageBackground && `url(${require('./../assets/images/articles/' + data?.image).default})` }}
      >
        {
          data.image && image && image != 'overlay' &&
          <div className='image-card'>
            <img src={require('./../assets/images/articles/' + data.image).default} />
          </div>
        }
        {
          data.video &&
          <div className='video-card'>
            <VideoPlayer src={require('./../assets/videos/articles/' + data.video).default} />
          </div>
        }

        <div className='article-content'>
          {
            data.rate &&
            <p className='rate'>
              <ion-icon name="star"></ion-icon>
              <span className='ml-1'>{data.rate}</span>
            </p>
          }
          <p className='category'> {data.category}</p>
          <h4 className='article-title'>{data.title}</h4>
          {
            showDescription &&
            <p className='article-description'>{data.description}</p>
          }
          <p className='article-author'>{data.author}</p>
        </div>

      </div>
    </div>
  )
}

export default ArticleCard