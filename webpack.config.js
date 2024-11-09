const path = require('path');

module.exports = {
    entry: {
        bundle: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    mode: "development",
    // mode: "production",
    resolve: {
        extensions: [".ts", ".js"], //from "./index" を "./index.ts" として解決する
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
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