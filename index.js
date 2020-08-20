const dyRequest = require("dy-request");
let PROJECT_CONSTANTS = {};

const load =  async (url, secret) => {
    PROJECT_CONSTANTS = await dyRequest.get(url, {"Authorization": secret});
};

module.exports = {
    load,
    constants: PROJECT_CONSTANTS
}