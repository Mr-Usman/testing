/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LinkComponent from '../../components/Link';
import { links } from '../../configs/index-config';
import GlobalStyle from '../../global-styles';

export default function HomePage() {

  return (
    <div className="wrapper">
      <Header />
      <GlobalStyle />
      <section className="content">
        <div className="content-upper">
          <main className="content-upper-main">
            {/* MAIN CONTENT START */}
            {links.map((item, index) => <><LinkComponent icon={item.icon} refLink={item.ref} text={item.text} key={`${Math.random() - index}`} /> {item.breakLine && <hr />}</>)}
          </main>
        </div>
      </section>
      <Footer />
    </div>

  );
}
