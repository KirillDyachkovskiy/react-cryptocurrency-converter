import s from './preloader.module.scss';

export default function Preloader() {
  return (
    <div className={s.preloader}>
      <div className={s.preloader__circle} />
      <div className={s.preloader__circle} />
      <div className={s.preloader__circle} />
      <div className={s.preloader__circle} />
    </div>
  );
}
