export interface IDateData {
  start: string;
  end?: string;
  discription: string;
}

export interface IInfoData {
  name: string;
  year: number;
  photo: string;
  introduce: {
    label: string;
    discription: string;
  };
  // 이력서 항목 (학력/경력/자격증)
  resumeItems: Array<{
    key: string;
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
