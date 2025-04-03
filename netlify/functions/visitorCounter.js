exports.handler = async () => {
  try {
    // Fetch the current count from Netlify KV
    let count = parseInt((await Netlify.env.get("visitor_count")) || "0", 10);
    
    count += 1;

    // Store the updated count
    await Netlify.env.set("visitor_count", count.toString());

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
