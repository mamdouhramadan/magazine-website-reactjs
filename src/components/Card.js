import React from 'react'

export const Card = ({ data }) => {

    return (
        <div className={'card card-hover'}>
            {data?.image &&
                <div className='card-image'>
                <img src={require('./../assets/images/' + data?.image).default} />
            </div>
            }
            <div className='card-content'>
                <h4 className='card-title'>{data?.title}</h4>
                <p className='card-description'>{data?.description}</p>
                {data?.tag && <span className='card-author mt-3'>{data?.tag}</span>}
            </div>

        </div>
    )
}
