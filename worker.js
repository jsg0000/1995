import { getHTML } from './layout.js';

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      // Serve the counter image
      if (url.pathname === '/counter.gif') {
        let count = '000001';
        try {
          const storedCount = await env.VISITOR_COUNT.get('count');
          if (storedCount) {
            count = storedCount.padStart(6, '0');
          }
        } catch (e) {
          console.error('KV read error:', e);
        }
        
        const svg = generateCounterSVG(count);
        
        return new Response(svg, {
          headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'no-cache',
          },
        });
      }

      // Serve the main HTML page
      if (url.pathname === '/' || url.pathname === '/index.html') {
        let count = 1;
        
        try {
          // Get and increment counter
          const storedCount = await env.VISITOR_COUNT.get('count');
          
          if (storedCount) {
            count = parseInt(storedCount) + 1;
          } else {
            count = 1;
          }
          
          // Save the incremented count (non-blocking)
          ctx.waitUntil(env.VISITOR_COUNT.put('count', count.toString()));
        } catch (e) {
          console.error('KV operation error:', e);
        }

        const html = getHTML(count);
        
        return new Response(html, {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
          },
        });
      }

      return new Response('Not Found', { status: 404 });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error: ' + error.message, { status: 500 });
    }
  },
};

function generateCounterSVG(count) {
  const digits = count.toString().padStart(6, '0').split('');
  const width = digits.length * 15;
  
  let digitBoxes = '';
  digits.forEach((digit, i) => {
    const x = i * 15;
    digitBoxes += `
      <rect x="${x}" y="0" width="14" height="20" fill="#000000" stroke="#00ff00" stroke-width="1"/>
      <text x="${x + 7}" y="15" font-family="Courier, monospace" font-size="14" fill="#00ff00" text-anchor="middle" font-weight="bold">${digit}</text>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20">
  ${digitBoxes}
</svg>`;
}
