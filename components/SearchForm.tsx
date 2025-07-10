import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query } : { query?: string}) => {
//   const query = "Test Query"; // Placeholder for query state
  return (
    <form action="/" className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search for Startups, Ideas, or Entrepreneurs"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5 " />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
