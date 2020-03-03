module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (const bracket of str) {
        const [startBracket, endBracket] = bracketsConfig.find(pair =>
            pair.includes(bracket)
        );
        if (bracket === startBracket && !stack.includes(startBracket)) {
            stack.push(endBracket);
            continue;
        }
        const stackedBracket = stack.pop();
        if (bracket === stackedBracket) {
            continue;
        }
        return false;
    }

    return !stack.length;
};
