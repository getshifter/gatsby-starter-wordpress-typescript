import * as React from 'react'
import GitHubRibbon from 'react-github-ribbons';
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
      <GitHubRibbon
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/getshifter/gatsby-starter-wordpress-typescript"
      />
    </div>
  )
}