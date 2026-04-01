const fs = require('fs');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path || '';

    if (filePath.endsWith('.env') || filePath.endsWith('config.json')) {
        console.error('Access blocked: Sensitive file');
        process.exit(2); // Block the tool
    } else {
        process.exit(0); // Allow
    }
});