const fs = require("fs");

function verifyJSON(jsonFile) {
    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonFile));
        const statement = jsonData.PolicyDocument.Statement[0];
        if (
            statement.Resource &&
            typeof statement.Resource === "string" &&
            statement.Resource.trim() === "*"
        ) {
            return false;
        }

        return true;
    } catch (error) {
        console.error("Error while verifying JSON data", error);
        return true;
    }
}

module.exports = verifyJSON;
