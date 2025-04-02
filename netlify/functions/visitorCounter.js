exports.handler = async function (event, context) {
  const Netlify = require("netlify");

  // Use an environment variable for storage (temporary in serverless functions)
  let count = parseInt(process.env.VISITOR_COUNT || "0") + 1;
  process.env.VISITOR_COUNT = count; // Temporary storage for demo purposes

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorCount: count }),
  };
};
