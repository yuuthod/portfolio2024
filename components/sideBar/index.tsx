'use client';

import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import { ISideData } from '@/types/dataType';
import cn from 'classnames';
import CloseSVG from '@/public/icons/close.svg';
import OpenSVG from '@/public/icons/hamburger.svg';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';

function SideBarComponent({ enName, infos, nav }: ISideData): ReactElement {
  const pathname = usePathname();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  const handleClickCopyText = (key: string) => {
    const find = infos.find((info) => info.label === key);
    navigator.clipboard.writeText(find?.value || '');
  };
  const handleClickMobileHamburger = (show: boolean) => {
    setIsMobileMenu(show);
  };
  const handleClickCloseMenuOnMobile = () => {
    setIsMobileMenu(false);
  };

  // Mobile Menu Open시 스크롤 방지
  useEffect(() => {
    const html = document.querySelector('html');
    if (html === null) return;
    if (isMobileMenu) {
      html.style.overflow = 'hidden';
      return;
    }
    html.style.overflow = 'auto';
  }, [isMobileMenu]);

  useEffect(() => {
    // 모바일 브라우저에서 주소창 등에 의해 고정된 메뉴가 가려지는 것을 방지
    const handleSetScrenHeihgt = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    // Mobile Menu event가 desktop size에서 동작하는 것을 방지
    const handleWindowResize = () => {
      const html = document.querySelector('html');
      if (html === null) return;
      const windowWidth = window.innerWidth;
      if (windowWidth > 770) {
        html.style.overflow = 'auto';
        setIsMobileMenu(false);
      } else {
        handleSetScrenHeihgt();
      }
    };

    handleSetScrenHeihgt();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={style['side-bar']}>
      <button
        type='button'
        className={style.mobileOpenBtn}
        onClick={() => handleClickMobileHamburger(true)}
      >
        <OpenSVG alt='모바일 메뉴 열기' />
      </button>
      <div
        className={cn(style.container, isMobileMenu ? style.show : style.close)}
      >
        <button
          type='button'
          className={style.mobileCloseBtn}
          onClick={() => handleClickMobileHamburger(false)}
        >
          <CloseSVG alt='모바일 메뉴 닫기' />
        </button>
        <nav className={style.nav}>
          <ul>
            {nav.map((menu) => (
              <li
                key={`menu_${menu.key}`}
                className={cn(
                  pathname.split('/')[1] === menu.href.split('/')[1] &&
                    style.active
                )}
              >
                <Link href={menu.href} onClick={handleClickCloseMenuOnMobile}>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.infoBlock}>
          <p className={style.name}>{enName}</p>
          <ul className={style.infos}>
            {infos.map((info) => (
              <li key={`side-info-${info.label}`}>
                <p className={style['label-title']}>{info.label}</p>
                {info.href ? (
                  <a className={style.label} href={`tel:${info.href}`}>
                    {info.value}
                  </a>
                ) : (
                  <p className={style.label}>
                    <span
                      role='presentation'
                      tabIndex={-1}
                      onClick={() => handleClickCopyText(info.label)}
                    >
                      {info.value}
                    </span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBarComponent;
