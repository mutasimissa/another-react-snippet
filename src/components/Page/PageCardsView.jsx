export const PageCardsView = (props) => {
  const { data, gridView, Grid, List, loading, error, search, filter } = props;

  if (loading) {
    return <p className="info-message"> loading...</p>;
  }
  if (error) {
    return <p className="info-message"> Error fetching Data...</p>;
  }

  const searchFilter = (term, items) => {
    if (term.length === 0) return items;
    const searchFilteredData = items.filter((item) => {
      return item.email.toLowerCase().includes(term.toLowerCase());
    });
    return searchFilteredData;
  };

  const orderFilter = (val, items) => {
    switch (val) {
      case "a-z":
        return items.sort((a, b) => a.name.first.localeCompare(b.name.first));
      case "z-a":
        return items.sort((a, b) => b.name.first.localeCompare(a.name.first));
      default:
        return items;
    }
  };

  let filteredResults = searchFilter(search, data.results);
  let orderedResults = orderFilter(filter, filteredResults);

  return (
    <>
      {gridView ? (
        <Grid data={orderedResults} />
      ) : (
        <List data={orderedResults} />
      )}
    </>
  );
};
