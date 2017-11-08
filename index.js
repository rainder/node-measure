"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function measure() {
    const timeStart = process.hrtime();
    return () => {
        const timeDiff = process.hrtime(timeStart);
        return (timeDiff[0] + (timeDiff[1] / 1e9)) / 1e3;
    };
}
exports.measure = measure;
//# sourceMappingURL=index.js.map