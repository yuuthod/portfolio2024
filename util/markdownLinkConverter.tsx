import { HtmlHTMLAttributes, ReactNode } from 'react';

/**
 * 마크다운 Link 문법이 포함되어 있는 문자열을 a태그로 변환
 * ex ) '[링크 설명](링크 주소)' > <a href="링크 주소">링크 설명</a>
 * @param markdownString string
 * @param props a 태그 속성
 * @returns ReactNode[]
 */
export default function markdownLinkConverter(
  markdownString: string,
  props?: HtmlHTMLAttributes<HTMLAnchorElement>
): ReactNode[] | string {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const anchorElements: ReactNode[] = [];

  const matches = Array.from(markdownString.matchAll(linkRegex));
  if (matches === null) return markdownString;

  let lastIndex = 0;
  matches.forEach((match) => {
    const linkText = match[1]; // 링크 텍스트
    const linkUrl = match[2]; // 링크 URL

    anchorElements.push(markdownString.substring(lastIndex, match.index));
    anchorElements.push(
      <a href={linkUrl} key={match.index} {...props}>
        {linkText}
      </a>
    );

    lastIndex = (match.index || 0) + match[0].length;
  });
  anchorElements.push(markdownString.substring(lastIndex));

  return anchorElements;
}
