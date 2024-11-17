const path = require('path');

module.exports = {
    entry: {
        bundle: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, 'docs'), // 出力ディレクトリを 'docs' に設定
        filename: "[name].js",
        publicPath: "" // 相対パスでのアクセス
    },
    mode: "production",
    resolve: {
        extensions: [".ts", ".js"], //from "./index" を "./index.ts" として解決する
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'docs'), // サーブするディレクトリを 'docs' に設定
        },
        open: true,
        historyApiFallback: true, // SPAのための設定
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // 拡張子が.tsで終わるファイルに対してコンパイル
                use: "ts-loader", // コンパイルにはts-loaderを使う
            },
        ],
    },
};