import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    }),
  ],
};
