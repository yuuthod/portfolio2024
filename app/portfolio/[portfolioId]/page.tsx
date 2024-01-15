import { getPortfolio } from '@/api';
import PortfolioComponent from '@/components/Portfolio';
import { redirect } from 'next/navigation';

async function portfolioId({ params }: { params: { portfolioId: string } }) {
  const portfolioResponse = await getPortfolio(params.portfolioId);
  if (portfolioResponse.resultCode > 0) {
    // id의 문제로 데이터를 받아오지 못한다면 기본 프로젝트로 이동
    const blockId = process.env.PORTFOLIO_BLOCK_ID || '';
    redirect(`/portfolio/${blockId}`);
    return <div>ERROR PORTFOLIO : {portfolioResponse.resultCode}</div>;
  }

  return (
    portfolioResponse.result && (
      <PortfolioComponent {...portfolioResponse.result} />
    )
  );
}

export default portfolioId;
