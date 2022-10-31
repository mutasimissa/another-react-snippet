import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Page,
  PageToolbar,
  PageToolbarSearch,
  PageToolbarSort,
  PageToolbarViewTypeToggler,
  PageCardsView,
} from "../components/Page";
import { TeamMemberGrid, TeamMemberList } from "../components/TeamMember";
import { useTeamMembersQuery } from "../hooks/query/useTeamMembersQuery";

export const MeetTheTeam = () => {
  const { t: trasnlate } = useTranslation();
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useTeamMembersQuery(page);
  const [gridView, setGridView] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("a-z");
  const toggleViewHandler = useCallback(() => {
    setGridView((prevState) => !prevState);
  }, []);
  const searchInputChangeHandler = useCallback((e) => {
    setSearchInput(e.target.value);
  });
  const filtersToggleHandler = useCallback(() => {
    setFilter((prev) => (prev === "a-z" ? "z-a" : "a-z"));
  });
  return (
    <Page title={trasnlate("meet-the-team-page-title")}>
      <PageToolbar>
        <PageToolbarSort clickHandler={filtersToggleHandler} />
        <PageToolbarSearch
          val={searchInput}
          changeHandler={searchInputChangeHandler}
        />
        <div className="spacing" /> {/*TODO*/}
        <PageToolbarViewTypeToggler
          gridView={gridView}
          toggleView={toggleViewHandler}
        />
      </PageToolbar>
      <PageCardsView
        Grid={TeamMemberGrid}
        List={TeamMemberList}
        data={data}
        gridView={gridView}
        loading={isFetching}
        search={searchInput}
        filter={filter}
        error={error}
      />
    </Page>
  );
};
