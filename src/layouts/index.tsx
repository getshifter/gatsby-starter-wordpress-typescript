import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './Header'
import Footer from './Footer'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any
}

export default (props: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}