// Netlify Function to fetch AI news
// Access at: /.netlify/functions/ai-news

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    // Sample data (replace with real API call when you have Brave API key)
    const news = [
      {
        id: 1,
        title: "GPT-5 Preview Shows Major Leap in Reasoning",
        category: "Research",
        date: "2026-02-15",
        excerpt: "Early tests show 40% improvement in complex problem-solving..."
      },
      {
        id: 2,
        title: "Claude 4 Enterprise Launches with Privacy Focus",
        category: "Products",
        date: "2026-02-14",
        excerpt: "Anthropic's new enterprise tier promises data isolation..."
      },
      {
        id: 3,
        title: "EU AI Act Compliance Deadline Approaches",
        category: "Industry",
        date: "2026-02-13",
        excerpt: "Businesses scramble to meet new regulatory requirements..."
      }
    ];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: news,
        updated: new Date().toISOString()
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
