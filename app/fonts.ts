import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: '../public/fonts/notosans_kr-thin.ttf',
      weight: '100',
      style: 'Thin'
    },
    {
      path: '../public/fonts/notosans_kr-extralight.ttf',
      weight: '200',
      style: 'extraLight'
    },
    {
      path: '../public/fonts/notosans_kr-light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../public/fonts/notosans_kr-regular.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../public/fonts/notosans_kr-medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../public/fonts/notosans_kr-semibold.ttf',
      weight: '600',
      style: 'semiBold'
    },
    {
      path: '../public/fonts/notosans_kr-bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../public/fonts/notosans_kr-extrabold.ttf',
      weight: '800',
      style: 'extraBold'
    },
    {
      path: '../public/fonts/notosans_kr-black.ttf',
      weight: '900',
      style: 'black'
    }
  ]
});
