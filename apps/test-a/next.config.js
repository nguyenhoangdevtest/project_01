const withNx = require('@nrwl/next/plugins/with-nx');
const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  images: {
    domains: ['os.alipayobjects.com'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextTranslate(withBundleAnalyzer(withNx(nextConfig)), {
  appPath: { appPath: process.env.NEXT_TRANSLATE_PATH },
});
