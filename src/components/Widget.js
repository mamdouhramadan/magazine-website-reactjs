import React from 'react'

const Widget = ({ title, description, list, type }) => {
    return (
        <div className='widget'>
            <h4 className='widget-title'>{title}</h4>
            {description && <p className='widget-discreption'>{description}</p>}
            {list &&
                <ul className='widget-list'>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index} className='item-list'>
                                    <a className='item-link link-hohver' href={item.link}>{item.text}</a>
                                </li>
                            )
                        })

                    }
                </ul>
            }
            {
                type == 'subscribe' && (
                    <div className='subscribe-form'>
                        <input className="form-input" type={'email'} placeholder="Enter Your Email Below" />
                        <button type='submit' className="submit-btn">Submit</button>
                    </div>
                )
            }

        </div>
    )
}

export default Widget