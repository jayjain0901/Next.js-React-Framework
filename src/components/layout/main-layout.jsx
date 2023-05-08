import React from 'react'
import { HeaderPage } from '../header/header-page'
import { FooterPage } from '../footer/footer-page'

export  function MainLayout({children}) {
  return (
    <div>
      <HeaderPage />
      <main>
        {children}
      </main>
      <FooterPage />
    </div>
  )
}
