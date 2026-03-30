import { execFileSync } from 'child_process';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const cliPath = 'C:\\Users\\offic\\AppData\\Roaming\\npm\\node_modules\\@_davideast\\stitch-mcp\\dist\\cli.js';

const child = spawn(process.execPath, [cliPath, 'proxy', '--transport', 'stdio'], {
  stdio: ['inherit', 'inherit', 'inherit'],
  env: { ...process.env }
});

child.on('exit', (code) => process.exit(code ?? 0));
