/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let i;

  for (i = 0; i < sortedCitations.length; i++) {
      if (sortedCitations[i] < i + 1) {
          break;
      }
  }

  return i;
};