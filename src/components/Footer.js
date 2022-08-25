import React from 'react';
import { widgetsList } from '../data/footer-widgets';
import { footerMenu } from '../data/navMenu';
import Widget from './Widget';

const Footer = () => {
  return (
    <footer className='footer'>

      <div className='footer-widgets'>

        <div className='row'>

          <div className='footer-widget grid'>
            <Widget title={'News'} list={widgetsList.news} />
          </div>

          <div className='footer-widget grid'>
            <Widget title={'Life'} list={widgetsList.life} />
          </div>

          <div className='footer-widget grid'>
            <Widget title={'Bussiness'} list={widgetsList.bussiness} />
          </div>

          <div className='footer-widget subscribe-widget grid-3'>
            <Widget
              title={'Subscribe'}
              description="Get fresh updates about  the fashion, beauty, trends"
              type="subscribe"
            />
          </div>


        </div>
      </div>

      <div className='bottom-footer'>
        <ul className='footer-list row'>
          {
            footerMenu.map((item, index) =>
              <li key={index} className="item-list">
                <a className='item-link link-hohver' href={item.link}>{item.text}</a>
              </li>
            )
          }
        </ul>
      </div>
    </footer>
  )
}

export default Footer