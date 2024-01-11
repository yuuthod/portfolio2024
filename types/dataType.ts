export interface IDateData {
  start: string;
  end?: string;
  discription: string;
}

export interface IInfoData {
  name: string;
  year: number;
  photo: string;
  introduce: string;
  education: Array<IDateData>; // 학력
  career: Array<IDateData>; // 경력
  certificate: Array<IDateData>; // 자격증
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
  enName: Array<String>;
  infos: Array<{
    label: string;
    value: string;
    href?: string;
  }>;
}
