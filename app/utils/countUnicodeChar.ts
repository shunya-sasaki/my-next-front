/**
 * Unicode文字数をカウントする関数
 * @param text
 * @returns
 */
export const countUnicodeChars = (text: string): number => {
    let count = 0;
    for (const char of text) {
        // Unicode範囲を使って全角文字かどうかを判定
        if (char.match(/[^\x01-\x7E\xA1-\xDF]/)) {
            count += 1; // 全角文字は1とカウント
        } else {
            count += 0.5; // 半角文字は0.5とカウント
        }
    }
    return Math.round(count);
};

/**
 * arrayの中で最大のUnicode文字数をカウントする関数
 * @param texts
 * @returns
 */
export const countMaxUnicodeChars = (texts: string[]): number => {
    let maxCount = 0;
    texts.map((text) => {
        const count = countUnicodeChars(text);
        if (count > maxCount) {
            maxCount = count;
        }
    });
    return maxCount;
};
