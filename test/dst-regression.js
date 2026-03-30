const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const bundlePaths = [
  path.join(__dirname, '..', 'wordle-it.js'),
  path.join(__dirname, 'wordle-it.js')
];

function loadDayDiff(bundlePath) {
  const source = fs.readFileSync(bundlePath, 'utf8');
  const match = source.match(/function \$a\(e, a\) \{[\s\S]*?return Math\.floor\(\(r - o\) \/ 864e5\)[\s\S]*?\}/);

  if (!match) {
    throw new Error(`Could not locate $a() in ${bundlePath}`);
  }

  const context = {};
  vm.createContext(context);
  vm.runInContext(`${match[0]}; this.dayDiff = $a;`, context);
  return context.dayDiff;
}

function runCases() {
  const cases = [
    {
      label: 'Europe/Rome spring forward',
      start: [2026, 2, 29, 12],
      end: [2026, 2, 30, 12],
      expected: 1
    },
    {
      label: 'Europe/Rome fall back',
      start: [2026, 9, 25, 12],
      end: [2026, 9, 26, 12],
      expected: 1
    },
    {
      label: 'America/New_York spring forward',
      start: [2026, 2, 8, 12],
      end: [2026, 2, 9, 12],
      expected: 1
    },
    {
      label: 'America/New_York fall back',
      start: [2026, 10, 1, 12],
      end: [2026, 10, 2, 12],
      expected: 1
    }
  ];

  for (const bundlePath of bundlePaths) {
    const dayDiff = loadDayDiff(bundlePath);

    for (const testCase of cases) {
      const start = new Date(...testCase.start);
      const end = new Date(...testCase.end);
      assert.strictEqual(
        dayDiff(start, end),
        testCase.expected,
        `${path.basename(bundlePath)} failed: ${testCase.label}`
      );
    }
  }
}

if (process.argv[2] === '--case') {
  runCases();
  process.exit(0);
}

for (const timeZone of ['Europe/Rome', 'America/New_York']) {
  const result = spawnSync(process.execPath, [__filename, '--case'], {
    env: { ...process.env, TZ: timeZone },
    stdio: 'pipe',
    encoding: 'utf8'
  });

  if (result.status !== 0) {
    process.stderr.write(result.stderr);
    process.exit(result.status || 1);
  }
}

console.log('DST regression checks passed.');
