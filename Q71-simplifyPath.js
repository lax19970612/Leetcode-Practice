/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const pathStack = [];
  let currFolderName = '';
  let simplifiedPath = '/';

  const operateStack = (folderName) => {
      switch (folderName) {
          case '':
          case '.':
              break;
          case '..':
              pathStack.pop();
              break;
          default:
              pathStack.push(folderName);
              break;
      }
  }

  for (let i = 0; i < path.length; i++) {
      const char = path.charAt(i);

      if (char === '/') {
          operateStack(currFolderName);
          currFolderName = '';
      } else {
          currFolderName += char;
      }
  }

  if (currFolderName !== '') operateStack(currFolderName);

  for (let i = 0; i < pathStack.length; i++) {
      simplifiedPath += (pathStack[i] + (i !== pathStack.length - 1 ? '/' : ''))
  }

  return simplifiedPath;
};