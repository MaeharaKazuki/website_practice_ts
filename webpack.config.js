module.exports = {
    entry: {
        bundle: "./src/index.ts"
    },
    output: {
        path: __dirname, // 出力ディレクトリを __dirname に設定
        filename: "[name].js",
    },
    // mode: "development",
    mode: "production",
    resolve: {
        extensions: [".ts", ".js"], //from "./index" を "./index.ts" として解決する
    },
    devServer: {
        static: {
            directory: __dirname, // サーブするディレクトリを __dirname に設定
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