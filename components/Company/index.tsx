import { ReactElement } from 'react';
import Link from 'next/link';
import { ICompanies } from '@/types/dataType';
import style from './style.module.scss';

function Company({
  date,
  name,
  nameEn,
  position,
  projects
}: ICompanies): ReactElement {
  return (
    <div className={style.container}>
      <p className={style.date}>
        <span>{date[0]} ~</span>
        <span>{date[1]}</span>
      </p>
      <div className={style.company}>
        <p className={style.companyName}>{name}</p>
        <p className={style.compatyNameEn}>{nameEn}</p>
        <p className={style.position}>{position}</p>
      </div>
      {projects && (
        <ul className={style.projectList}>
          {projects.map((project) => (
            <li key={project.id}>
              <p className={style.projectDate}>
                <span>{project.date[0]} </span>-<span> {project.date[1]}</span>
              </p>
              <p className={style.projectName}>
                <Link href={`/portfolio/${project.id}`}>{project.name}</Link>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Company;
