import { Client } from '@notionhq/client';
import { IInfoData, IPortfolioData, ISideData } from '@/types/dataType';

const notion = new Client({ auth: process.env.API_KEY });

interface IDatabase {
  id: string;
  properties: {
    [key: string]: any;
  };
}

/**
 * Notion Database Table
 * @param databaseId
 * @returns
 */
export async function getDatabase(databaseId: string) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId
    });
    return (response.results as Array<IDatabase>).map((page) => ({
      id: page.id,
      dataName: page.properties.dataName.title[0].text.content || '',
      description: page.properties.description.rich_text[0].text.content || ''
    }));
  } catch (error) {
    console.error('getDatabase error', error);
    return undefined;
  }
}

/**
 * Notion Page
 * @param pageId
 * @returns
 */
export async function getPage(pageId: string) {
  try {
    const response = await notion.pages.retrieve({
      page_id: pageId
    });
    return response;
  } catch (error) {
    console.error('getPage error', error);
    return undefined;
  }
}

/**
 * Page 내부에 있는 Block 기준
 * @param blockId
 * @returns
 */
export async function getBlock(
  blockId: string
): Promise<Array<any> | undefined> {
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50
    });
    return response.results
      .filter((block) => (block as { type: string }).type === 'code')
      .map((block) => {
        const blocks = block as { [key: string]: any };
        const strData = blocks.code.rich_text[0].text.content;
        if (strData[0] !== '{' && strData[strData.length - 1] !== '}')
          return undefined;
        return JSON.parse(strData);
      });
  } catch (error) {
    console.error('getPage error', error);
    return undefined;
  }
}

/**
 * 개인정보 api
 * @returns @type IInfoData
 */
export async function getInfo(): Promise<{
  resultCode: number;
  result?: IInfoData;
}> {
  const blockId = process.env.INFO_BLOCK_ID || '';
  if (!blockId) return { resultCode: 1 }; // env error
  const infos = await getBlock(blockId);
  const info = infos && (infos[0] as IInfoData);
  if (!info) return { resultCode: 2 }; // api error

  return { resultCode: 0, result: info };
}

/**
 * 포트폴리오
 * @returns @type Array<IPortfolioData>
 */
export async function getPortfolio(blockId: string): Promise<{
  resultCode: number;
  result?: IPortfolioData;
}> {
  const results = await getBlock(blockId);
  const portfolio = results && (results[0] as IPortfolioData);
  if (!portfolio) return { resultCode: 2 }; // api error
  return { resultCode: 0, result: portfolio };
}

/**
 * 간단한 개인정보 및 메뉴명 등 전역에 쓰일 데이터
 * @returns @type ISideData
 */
export async function getSide(): Promise<{
  resultCode: number;
  result?: ISideData;
}> {
  const blockId = process.env.SIDE_BLOCK_ID || '';
  if (!blockId) return { resultCode: 1 }; // env error
  const results = await getBlock(blockId);
  const side = results && (results[0] as ISideData);
  if (!side) return { resultCode: 2 }; // api error
  return { resultCode: 0, result: side };
}
