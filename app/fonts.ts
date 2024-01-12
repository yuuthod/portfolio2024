import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: '../public/fonts/NotoSansKR-Thin.ttf',
      weight: '100',
      style: 'Thin'
    },
    {
      path: '../public/fonts/NotoSansKR-ExtraLight.ttf',
      weight: '200',
      style: 'extraLight'
    },
    {
      path: '../public/fonts/NotoSansKR-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../public/fonts/NotoSansKR-Regular.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../public/fonts/NotoSansKR-Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../public/fonts/NotoSansKR-semiBold.ttf',
      weight: '600',
      style: 'semiBold'
    },
    {
      path: '../public/fonts/NotoSansKR-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../public/fonts/NotoSansKR-ExtraBold.ttf',
      weight: '800',
      style: 'extraBold'
    },
    {
      path: '../public/fonts/NotoSansKR-Black.ttf',
      weight: '900',
      style: 'black'
    }
  ]
});
