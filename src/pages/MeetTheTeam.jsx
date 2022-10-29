import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { API } from "../API";
import {
  ListPage,
  ListPageToolbar,
  Filter,
  SearchInput,
  ListViewTypeToggler,
  PaginatedList,
  ContactPersonCard
} from '../components'

export const MeetTheTeam = () => {
  const { t: trasnlate } = useTranslation();
  const [teamData, setTeamData] = useState([]);
  const [viewType, setViewType] = useState("grid")
  const [searchInputText, setSearchInputText] = useState('')
  //const [ filter, setFilter ] = useState('asc')
  useEffect(() => {
    const getTeamData = async () => {
      let data = await new API('https://randomuser.me/api').getAll("/", "results=50"); //yes it's better to pass params as object TODO
      data = data?.results[0] ? data.results : [];
      setTeamData(data);
    };
    getTeamData();
  }, []);
  return (
    <ListPage title={trasnlate("meet-the-team-page-title")}>
      <ListPageToolbar>
        <Filter />
        <SearchInput setSearchInputText={(searchInputText)=>setSearchInputText(searchInputText)}/>
        <ListViewTypeToggler setViewType={(viewType)=>setViewType(viewType)}/>
      </ListPageToolbar>
      <PaginatedList data={teamData} viewType={viewType} searchInputText={searchInputText}>
        <ContactPersonCard />
      </PaginatedList>
    </ListPage>
  );
};
