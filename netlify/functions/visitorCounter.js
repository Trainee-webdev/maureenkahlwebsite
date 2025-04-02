// functions/visitor-counter.js
let visitCount = 0;

exports.handler = async function(event, context) {
  // Increment the visit counter
  visitCount++;

  // Return the count as a JSON response
  return {
    statusCode: 200,
    body: JSON.stringify({ visitCount })
  };
};
