'use client';

import { ReactElement } from 'react';
import { IInfoData } from '@/types/dataType';
import Company from '@/components/Company';
import style from './style.module.scss';
import ProfilePhoto from '../ProfilePhoto';

function infoComponent({
  name,
  year,
  photos,
  workExperience,
  resumeItems
}: IInfoData): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.privacy}>
        <ProfilePhoto photos={photos} />
        <div className={style.aboutMe}>
          <p>
            <span className={style.name}>{name}</span>
            <span className={style.year}>{year}</span>
          </p>
          <p className={style.jop}>FrontEnd Developer</p>
          <p className={style.discription}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
        <div className={style.skills}>
          <p className={style.title}>Skills</p>
          <ul className={style.list}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Typescript</li>
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
                    <span>|</span>
                    <span className={style['resume-disc']}>
                      {item.discription}
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
