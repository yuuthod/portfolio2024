'use client';

import { ReactElement } from 'react';
import { IPortfolioData } from '@/types/dataType';
import Link from 'next/link';
import ArrowForwardSVG from '@/public/icons/arrow_forward.svg';
import CircleRightSVG from '@/public/icons/expand_circle_right.svg';
import CheckBoxSVG from '@/public/icons/check_box.svg';
import CheckBoxBlankSVG from '@/public/icons/check_box_outline_blank.svg';
import cn from 'classnames';
import ImageListViewer from '@/components/commons/ImageListViewer';
import markdownLinkConverter from '@/util/markdownLinkConverter';
import style from './style.module.scss';

function PortfolioComponent({
  subTitle,
  title,
  description,
  date,
  images,
  team,
  skill,
  connectLinks,
  taskList,
  todoList,
  nextBlockId,
  prevBlockId
}: IPortfolioData): ReactElement {
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
      {date && <p className={style.date}>{date}</p>}
      <p className={style['project-desc']}>{description}</p>
      {images && <ImageListViewer images={images} />}
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
                <span>
                  {markdownLinkConverter(task.description, {
                    className: style.link
                  })}
                </span>
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
                    <span>
                      {markdownLinkConverter(todo.description, {
                        className: style.link
                      })}
                    </span>
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
