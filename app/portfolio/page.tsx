import { redirect } from 'next/navigation';

export default async function portfolio() {
  const blockId = process.env.PORTFOLIO_BLOCK_ID || '';
  redirect(`/portfolio/${blockId}`);

  return null;
}
