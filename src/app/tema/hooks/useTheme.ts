import React from "react";
import cloneDeep from "lodash/cloneDeep";
import { listKp } from "../data";

export function useThemes() {
 const [activeTab, setActiveTab] = React.useState("");
 const [searchTab, setSearchTab] = React.useState("");

 const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newTheme: string | null
 ) => {
  setActiveTab(newTheme ? newTheme : "");
 };

 const handleSearchTermUpdate = (searchTermUpdate: any) => {
  setSearchTab(searchTermUpdate.target.value);
 };

 const { listData } = React.useMemo(() => {
  let listData = listKp || [];

  if (searchTab === "") {
   //    console.log("masuk kondisi");
   listData = cloneDeep(listData).splice(0, 10);
  }

  //   console.log("listData", searchTab, activeTab, listData);

  if (searchTab !== "" && listData.length && activeTab !== "") {
   const filteredPosts = listKp.filter((post) => {
    // const titleAndBodyText =
    //  post.kode_kp.replace(/\n/g, " ") + post.nama_kp.replace(/\n/g, " ");
    return post.nama_kp.toLowerCase().includes(searchTab.toLowerCase());
   });

   listData = filteredPosts;
   //    console.log(filteredPosts);
  }

  return {
   listData,
  };
 }, [listKp, activeTab, searchTab]);

 return {
  activeTab,
  listKp,
  handleAlignment,
  listData,
  handleSearchTermUpdate,
  searchTab,
 };
}

export default useThemes;
