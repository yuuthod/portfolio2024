import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [16, 32, 48, 64],
    deviceSizes: [640, 750, 828, 1080]
  }
};

export default withPlaiceholder(nextConfig);
