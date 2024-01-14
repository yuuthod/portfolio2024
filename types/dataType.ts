export interface IDateData {
  id: string;
  start: string;
  end?: string;
  discription: string;
}

export interface IPhoto {
  id: string;
  src: string;
  blur: string;
}
export interface ICompanies {
  id: string;
  date: Array<string>;
  name: string;
  nameEn: string;
  position: string;
  projects?: Array<{
    id: string;
    name: string;
    date: Array<string>;
  }>;
}
export interface IInfoData {
  name: string;
  year: number;
  jop: string;
  photos: Array<IPhoto>;
  introduce: {
    label: string;
    discription: string;
  };
  skills: {
    id: string;
    label: string;
    list: Array<{
      id: string;
      label: string;
    }>;
  };
  // 경력
  workExperience: {
    label: string;
    companies: Array<ICompanies>;
  };
  // 이력서 항목 (학력/자격증)
  resumeItems: Array<{
    id: string;
    label: string;
    items: Array<IDateData>;
  }>;
}

export interface IPortFolioData {
  officeName: string;
  projectName: string;
  discription: string;
  imageCount: number;
  projectInfo: {
    team: {
      // 팀원
      total: number;
      discription: string;
    };
    skill: Array<string>; // 기술스택
    worked: []; // 참여부분
    contribution: number; // 기여도 퍼센트
  };
}

export interface ISideData {
  name: string;
  enName: string;
  photo: string;
  photoBlur: string;
  nav: Array<{
    key: string;
    label: string;
    href: string;
  }>;
  infos: Array<{
    label: string;
    value: string;
    href?: string;
  }>;
}
