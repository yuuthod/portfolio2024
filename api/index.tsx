import { Client } from '@notionhq/client';
import { IInfoData, IPortFolioData } from '@/types/dataType';

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
      dataName: page.properties['dataName'].title[0].text.content || '',
      discription:
        page.properties['discription'].rich_text[0].text.content || ''
    }));
  } catch (error) {
    console.error('getDatabase error', error);
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
        const strData = blocks.code['rich_text'][0].text.content;
        if (strData[0] !== '{' && strData[strData.length - 1] !== '}') return;
        return JSON.parse(strData);
      });
  } catch (error) {
    console.error('getPage error', error);
  }
}

/**
 * 개인정보 api
 * @returns @type IInfoData
 */
export async function getInfo(): Promise<{
  resultCode: number;
  info?: IInfoData;
}> {
  const blockId = process.env.INFO_BLOCK_ID || '';
  if (!blockId) return { resultCode: 1 }; // env error
  const infos = await getBlock(blockId);
  const info = infos && (infos[0] as IInfoData);
  if (!info) return { resultCode: 2 }; // api error
  else return { resultCode: 0, info };
}

/**
 * 포트폴리오
 * @returns @type Array<IPortFolioData>
 */
export async function getPortfolio(): Promise<{
  resultCode: number;
  portfolio?: Array<IPortFolioData>;
}> {
  const blockId = process.env.PORTFOLIO_BLOCK_ID || '';
  if (!blockId) return { resultCode: 1 }; // env error
  const portfolio = await getBlock(blockId);
  if (!portfolio) return { resultCode: 2 }; // api error
  else return { resultCode: 0, portfolio };
}
