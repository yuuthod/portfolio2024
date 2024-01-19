'use client';

import { ReactElement, useCallback } from 'react';
import Image from 'next/image';
import { IPortfolioData } from '@/types/dataType';
import Link from 'next/link';
import ArrowForwardSVG from '@/public/icons/arrow_forward.svg';
import CircleRightSVG from '@/public/icons/expand_circle_right.svg';
import CheckBoxSVG from '@/public/icons/check_box.svg';
import CheckBoxBlankSVG from '@/public/icons/check_box_outline_blank.svg';
import cn from 'classnames';
import { useModal } from '@/providers/Modal';
import ImageViewerModal from '@/components/commons/ImageViewerModal';
import style from './style.module.scss';

function PortfolioComponent({
  subTitle,
  title,
  description,
  images,
  team,
  skill,
  connectLinks,
  taskList,
  todoList,
  nextBlockId,
  prevBlockId
}: IPortfolioData): ReactElement {
  const { openModal, closeModal } = useModal();
  const handleClickImage = useCallback(
    (idx: number) => {
      if (!images) return;
      openModal(
        <ImageViewerModal images={images} idx={idx} closeModal={closeModal} />,
        {
          isNoCloseBtn: true
        }
      );
    },
    [openModal, closeModal, images]
  );
  return (
    <div className={style.container}>
      <div className={cn(style['next-btn'])}>
        {prevBlockId && (
          <Link
            href={`/portfolio/${prevBlockId}`}
            className={style['perv-btn']}
          >
            <ArrowForwardSVG />
            PERV
          </Link>
        )}
        {nextBlockId && (
          <Link href={`/portfolio/${nextBlockId}`}>
            NEXT
            <ArrowForwardSVG />
          </Link>
        )}
      </div>
      <p className={style.subTitle}>{subTitle}</p>
      <p className={style.title}>{title}</p>
      <p className={style['project-desc']}>{description}</p>
      {images && (
        <div className={style['img-container']}>
          <ul className={style['img-list']}>
            {images.map((img, idx) => (
              <li key={img.id}>
                <Image
                  alt={img.alt}
                  src={img.src}
                  width={357}
                  height={0}
                  sizes='357px'
                  onClick={() => handleClickImage(idx)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={style.infos}>
        <div className={style.left}>
          <div className={style.team}>
            <p className={style.label}>{team.label}</p>
            <p className={style.total}>총 {team.total}팀</p>
            <p>{team.description}</p>
          </div>
          <div className={style.skill}>
            <p className={style.label}>{skill.label}</p>
            <p className={style.list}>
              {skill.list.map((skillItem) => (
                <span key={skillItem.id}>{skillItem.label}</span>
              ))}
            </p>
          </div>
          {connectLinks && (
            <div className={style.links}>
              <p className={style.label}>{connectLinks.label}</p>
              <ul>
                {connectLinks.list.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={style.right}>
          <p className={style.label}>{taskList.label}</p>
          <ul className={style.list}>
            {taskList.list.map((task) => (
              <li key={task.id}>
                <CircleRightSVG alt='참여범위 글머리 기호' />
                <span>{task.description}</span>
              </li>
            ))}
          </ul>
          {todoList && (
            <>
              <p className={style.label}>{todoList.label}</p>
              <ul className={style.list}>
                {todoList.list.map((todo) => (
                  <li key={todo.id}>
                    {todo.isCheck ? (
                      <CheckBoxSVG alt='TODO ITEM 완료' />
                    ) : (
                      <CheckBoxBlankSVG alt='TODO ITEM 작업 예정' />
                    )}
                    <span>{todo.description}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponent;
