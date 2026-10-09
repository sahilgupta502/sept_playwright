// module.exports = {
//     default: {
//         require: ['step-definations/**/*.ts'],
//         paths: ['features/**/*.feature'],
//         requireModule: ['ts-node/register'],
//         format: ['progress',
//              'html:cucumber-report.html'
//         ]
//     }
// };


module.exports = {
default : {
    path:['features/**/*.feature'],
    require:['step-definations/**/*.ts'],
    requireModule:['ts-node/register'],
    format:['progress']
}
}