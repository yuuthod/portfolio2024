import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: './fonts/NotoSansKR-Thin.ttf',
      weight: '100',
      style: 'Thin'
    },
    {
      path: './fonts/NotoSansKR-ExtraLight.ttf',
      weight: '200',
      style: 'extraLight'
    },
    {
      path: './fonts/NotoSansKR-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: './fonts/NotoSansKR-Regular.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: './fonts/NotoSansKR-Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: './fonts/NotoSansKR-semiBold.ttf',
      weight: '600',
      style: 'semiBold'
    },
    {
      path: './fonts/NotoSansKR-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: './fonts/NotoSansKR-ExtraBold.ttf',
      weight: '800',
      style: 'extraBold'
    },
    {
      path: './fonts/NotoSansKR-Black.ttf',
      weight: '900',
      style: 'black'
    }
  ]
});
