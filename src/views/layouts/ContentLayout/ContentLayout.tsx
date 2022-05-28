import { ReactNode } from 'react';

import s from './contentLayout.module.scss';

interface IContentLayout {
  children: ReactNode;
  title: string;
}

function ContentLayout({ children, title }: IContentLayout) {
  return (
    <section className={s.contentLayout}>
      <header className={s.contentLayout__header}>
        <h2 className={s.contentLayout__title}>{title}</h2>
        <p className={s.contentLayout__subtitle}>
          World&apos;s best cryptocurrency exchange
        </p>
      </header>
      {children}
    </section>
  );
}

export default ContentLayout;
