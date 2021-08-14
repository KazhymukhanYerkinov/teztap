import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { LayoutProps } from './Layout.props';

import styles from './Layout.module.scss';


const Layout = ({ children }: LayoutProps) => {

  return (
    <div className = {styles.wrapper}>
      <Header />
      <div className = {styles.content}>
        { children }
      </div>
      <Footer />
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  }
}
