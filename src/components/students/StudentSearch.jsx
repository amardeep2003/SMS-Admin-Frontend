import { FaSearch } from "react-icons/fa";

function StudentSearch({
  search,
  setSearch,
  setPage,
}) {
  return (
    <div className="student-search">

      <FaSearch />

      <input
        type="text"
        placeholder="Search by name or mobile..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

    </div>
  );
}

export default StudentSearch;