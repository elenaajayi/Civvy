export const ISSUES = ['Housing', 'Transit', 'Climate', 'Healthcare', 'Education'];

export const fetchIssues = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return ISSUES;
};

export const fetchVideosByIssue = async (issue) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return Array.from({ length: 5 }, (_, i) => ({
    id: i,
    title: `${issue} Candidate ${i + 1}`,
    videoAsset: `https://via.placeholder.com/320x240?text=Video+${i + 1}`,
    issues: [issue]
  }));
};
