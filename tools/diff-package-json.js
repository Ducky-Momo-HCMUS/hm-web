/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const prettyRootPackagePath = './package.json';
const rootPackage = require('../package.json');

const rootPath = path.join(__dirname, '..');
const rootDependencies = [].concat(
  Object.keys(rootPackage.dependencies ?? {}),
  Object.keys(rootPackage.devDependencies ?? {})
);

// Get all workspaces directory from wildcard (*) expressions
const workspaces = rootPackage.workspaces.flatMap((workspaceOrWildcard) => {
  const workspaceOrPath = workspaceOrWildcard.replaceAll('*', '');
  return workspaceOrWildcard.includes('*')
    ? fs
        .readdirSync(workspaceOrPath)
        .map((workspace) => path.join(workspaceOrPath, workspace))
    : workspaceOrPath;
});

// Load package.json for each workspace
const packagePaths = workspaces
  .map((workspace) => path.resolve(workspace, 'package.json'))
  .filter((package) => fs.existsSync(package));
const prettyPackagePaths = packagePaths
  .map((package) => path.relative(rootPath, package))
  .map((package) => package.replace(/\\/g, '/'));
const packages = packagePaths.map((package) => require(package));

const diff = {};
const dependencyKeys = ['dependencies', 'devDependencies'];

const mergeArray = (arrayOrNull, value) => {
  const array = arrayOrNull ?? [];
  array.push(value);
  return array;
};

rootDependencies.forEach((dependency) => {
  dependencyKeys.forEach((rootKey) => {
    if (!rootPackage[rootKey]) return;
    const rootVersion = rootPackage[rootKey][dependency];

    packages.forEach((package, i) => {
      dependencyKeys.forEach((key) => {
        if (!package[key]) return;

        const version = package[key][dependency];
        if (!version) return;
        if (rootVersion !== version) {
          const dependencyDiff = diff[dependency] ?? {};

          dependencyDiff[prettyPackagePaths[i]] = mergeArray(
            dependencyDiff[prettyPackagePaths[i]],
            version
          );

          diff[dependency] = dependencyDiff;
        }
      });
    });

    if (diff[dependency]) {
      const dependencyDiff = diff[dependency];
      dependencyDiff[prettyRootPackagePath] = mergeArray(
        dependencyDiff[prettyRootPackagePath],
        rootVersion
      );
    }
  });
});

console.log(diff);
