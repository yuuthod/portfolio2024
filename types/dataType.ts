export interface IDateData {
  id: string;
  start: string;
  end?: string;
  description: string;
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
    description: string;
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

export interface IPortfolioData {
  subTitle: string;
  title: string;
  description: string;
  imageCount: number;
  team: {
    label: string;
    total: number;
    description: string;
  };
  skill: {
    label: string;
    list: Array<{
      id: string;
      label: string;
    }>;
  };
  taskList: {
    label: string;
    list: Array<{
      id: string;
      description: string;
    }>;
  };
  nextBlockId?: string;
  prevBlockId?: string;
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
