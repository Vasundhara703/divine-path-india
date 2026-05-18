function Filters({

  categoryFilter,
  setCategoryFilter,

  stateFilter,
  setStateFilter,

}) {

  return (

    <div className="grid md:grid-cols-2 gap-4 mb-10">

      {/* CATEGORY FILTER */}
      <select
        value={categoryFilter}
        onChange={(e) =>
          setCategoryFilter(
            e.target.value
          )
        }
        className="border-2 border-gray-300 rounded-2xl px-5 py-4 shadow-lg"
      >

        <option value="All">
          All Categories
        </option>

        <option value="Shiva">
          Shiva
        </option>

        <option value="Vishnu">
          Vishnu
        </option>

        <option value="Ganesh">
          Ganesh
        </option>

        <option value="Hanuman">
          Hanuman
        </option>

        <option value="Durga">
          Durga
        </option>

      </select>

      {/* STATE FILTER */}
      <select
        value={stateFilter}
        onChange={(e) =>
          setStateFilter(
            e.target.value
          )
        }
        className="border-2 border-gray-300 rounded-2xl px-5 py-4 shadow-lg"
      >

        <option value="All">
          All States
        </option>

        <option value="Uttar Pradesh">
          Uttar Pradesh
        </option>

        <option value="Tamil Nadu">
          Tamil Nadu
        </option>

        <option value="Kerala">
          Kerala
        </option>

        <option value="Karnataka">
          Karnataka
        </option>

        <option value="Gujarat">
          Gujarat
        </option>

        <option value="Odisha">
          Odisha
        </option>

      </select>

    </div>
  );
}

export default Filters;