import React, { Children } from 'react'
import { theme } from '../constants'
import Footer from './footer'
import Header from './header'

export const PageContainer = ({ children }) => {

    

    return (
        <div className='page'>
            <div className='page-container'>
                <Header />
                <main className='main-content'>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
