'use client';

import { ReactElement } from 'react';
import { IInfoData } from '@/types/dataType';
import Company from '@/components/Company';
import style from './style.module.scss';
import ProfilePhoto from '../ProfilePhoto';

function infoComponent({
  name,
  year,
  jop,
  photos,
  introduce,
  skills,
  workExperience,
  resumeItems
}: IInfoData): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.privacy}>
        <ProfilePhoto photos={photos} className={style.profileContainer} />
        <div className={style.aboutMe}>
          <p>
            <span className={style.name}>{name}</span>
            <span className={style.year}>{year}</span>
          </p>
          <p className={style.jop}>{jop}</p>
          <p className={style.description}>{introduce.description}</p>
        </div>
        <div className={style.skills}>
          <p className={style.title}>{skills.label}</p>
          <ul className={style.list}>
            {skills.list.map((item) => (
              <li key={item.id}>
                {item.label}
                {item.list && (
                  <ul className={style['sub-list']}>
                    {item.list.map((subItem) => (
                      <li
                        key={`${item.id}-${subItem.id}-1`}
                        {...(subItem.light && { className: style.light })}
                      >
                        {subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.history}>
        {workExperience && (
          <p className={style.title}>
            <span>{workExperience.label}</span>
          </p>
        )}
        {workExperience.companies.map((company) => (
          <Company key={company.id} {...company} />
        ))}
        {resumeItems.map((resume) => (
          <div key={resume.id} className={style['resume-container']}>
            <p className={style.title}>
              <span>{resume.label}</span>
            </p>
            <ul className={style['resume-list']}>
              {resume.items.map((item) => (
                <li key={item.id}>
                  <p>
                    <span className={style['resume-date']}>
                      {item.start}
                      {item.end && ` ~ ${item.end}`}
                    </span>
                    <span className={style['vertical-bar']}>|</span>
                    <span className={style['resume-desc']}>
                      {item.description}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default infoComponent;
