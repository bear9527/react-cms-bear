const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const lessPlugin = require("craco-less");
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules[1].oneOf = [
        ...[
          {
            test: /.svg$/,
            // 存放svg的文件夹
            include: resolve('./src/assets/Icon/svg'),
            use: [
              { loader: 'svg-sprite-loader', options: {} },
              { loader: 'svgo-loader', options: {} }
            ]
          }
        ],
        ...webpackConfig.module.rules[1].oneOf
      ]
      return webpackConfig
    }
  },
  // 插件
  plugins: [
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // antdv 主题之类的配置
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          }
        }
      }
    }
  ],

  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  },
  // 如果没安装，可以删除
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  }
}
