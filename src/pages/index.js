import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <div>
        <h1 className="header-title">{siteConfig.title}</h1>
        <p className="header-subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttonsGroup}>
          <Link
            className={styles.buttons}
            to="/docs/guide">
            指南
          </Link>
          <Link
            className={styles.buttons}
            style={{ marginLeft: '20px' }}
            to="/docs/source">
            资源
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='Home'
      description="Web 前端手册指南，收集精品文章和开源资源。">
      <HomepageHeader />
    </Layout>
  );
}
