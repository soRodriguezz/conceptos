const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try {
            await sleep(4000);
            return 'One value';
        } catch (err) {
            console.log(err);
        }
    },
    async tasksTwo() {
        await sleep(2000);
        return 'Two value';
    }
}