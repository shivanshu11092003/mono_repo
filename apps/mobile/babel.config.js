const path = require('path');

module.exports = function (api) {
  api.cache(true);

  // Safe resolver that won't throw module errors if a package isn't installed yet
  const safeResolve = (name) => {
    try {
      return require.resolve(name, { paths: [path.join(__dirname, './')] });
    } catch {
      return null;
    }
  };

  const alias = {
    react: safeResolve('react'),
    '^react-native$': safeResolve('react-native'),
    '^react-native/(.+)': ([, name]) => {
      try {
        return require.resolve(`react-native/${name}`, {
          paths: [path.join(__dirname, './')],
        });
      } catch {
        return `react-native/${name}`;
      }
    },
  };

  // User optional packages setup
  const optionalPackages = ['react-native-svg', '@apollo/react-hooks', 'apollo-client'];
  for (const pkg of optionalPackages) {
    const resolved = safeResolve(pkg);
    if (resolved) {
      alias[pkg] = resolved;
    }
  }

  // Filter out any uninstalled entries
  Object.keys(alias).forEach((key) => {
    if (alias[key] === null) {
      delete alias[key];
    }
  });

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias,
          extensions: [
            '.ios.js',
            '.ios.ts',
            '.ios.tsx',
            '.android.js',
            '.android.ts',
            '.android.tsx',
            '.native.js',
            '.native.ts',
            '.native.tsx',
            '.js',
            '.ts',
            '.tsx',
          ],
        },
      ],
    ],
  };
};
