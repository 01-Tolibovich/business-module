"use client";

import "./styles.scss";

interface SearchParamsData {
  client_code: string;
  [key: string]: unknown;
}

interface SearchResultProps {
  searchResultData: SearchParamsData | null;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  searchResultData,
}) => {

  return (
    <div className="searchResult">
      <div>{searchResultData?.client_code}</div>
      <div></div>
    </div>
  );
};
