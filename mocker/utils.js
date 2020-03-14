function array_of(times, generator) {
  const result = [];

  for (var i = 0; i < times; ++i) {
    result.push(generator());
  }

  return result;
}

function paginate(sourceList, page = 1, perPage = 10) {
  var index = page - 1;
  var totalCount = sourceList.length;
  var lastPage = Math.floor(totalCount / perPage);
  var sliceBegin = index*perPage;
  var sliceEnd = sliceBegin+perPage;
  var pageList = sourceList.slice(sliceBegin, sliceEnd);

  return {
    pageData: pageList,
    nextPage: page < lastPage ? page+1 : null,
    totalCount: totalCount
  }
}

module.exports = { paginate, array_of };
