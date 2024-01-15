import { ReactElement } from 'react';
import { IPortfolioData } from '@/types/dataType';
import Link from 'next/link';
import ArrowForwardSVG from '@/public/icons/arrow_forward.svg';
import cn from 'classnames';
import style from './style.module.scss';

function PortfolioComponent({
  subTitle,
  title,
  description,
  imageCount,
  team,
  skill,
  taskList,
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
      <p className={style['project-desc']}>{description}</p>
      {imageCount !== 0 && (
        <div className={style['img-container']}>
          <ul className={style['img-list']}>
            <li>이미지1</li>
            <li>이미지2</li>
            <li>이미지3</li>
            <li>이미지4</li>
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
        </div>
        <div className={style.right}>
          <p className={style.label}>{taskList.label}</p>
          <ul className={style['task-list']}>
            {taskList.list.map((task) => (
              <li key={task.id}>{task.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponent;
