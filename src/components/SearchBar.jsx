function SearchBar({
  search,
  setSearch,
}) {

  return (

    <div className="mb-6">

      <input
        type="text"
        placeholder="Search temples..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border-2 border-gray-300 rounded-2xl px-5 py-4 shadow-lg"
      />

    </div>
  );
}

export default SearchBar;