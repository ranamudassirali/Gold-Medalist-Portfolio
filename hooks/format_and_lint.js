const { execSync } = require('child_process');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path;

    if (filePath) {
        try {
            execSync(`npx prettier --write ${filePath}`, { stdio: 'inherit' });
            execSync(`npx eslint --fix ${filePath}`, { stdio: 'inherit' });
        } catch (e) {
            console.error('Error formatting or linting:', e.message);
        }
    }
});