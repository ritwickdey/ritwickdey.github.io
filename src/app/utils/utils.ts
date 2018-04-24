export const testUniqueness = <T>(allData: T[], uKeyFn: (t: T) => any) => {
  const result = { error: null, duplicates: [] };
  allData.forEach((data, i, alldata) => {
    if (alldata.filter(p => uKeyFn(p) === uKeyFn(data)).length !== 1) {
      result.error = 'Duplicate Key';
      result.duplicates.push(data);
    }
  });
  return result;
};
