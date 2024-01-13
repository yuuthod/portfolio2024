'use client';

import { ReactElement, useState } from 'react';
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
                className={cn(pathname === menu.href && style.active)}
              >
                <Link href={menu.href}>{menu.label}</Link>
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
