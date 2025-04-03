const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "counter.json");

exports.handler = async () => {
  try {
    let count = 0;

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      count = JSON.parse(data).count;
    }

    count += 1;
    fs.writeFileSync(filePath, JSON.stringify({ count }), "utf8");

    return {
      statusCode: 200,
      body: JSON.stringify({ count }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not update counter" }),
    };
  }
};

