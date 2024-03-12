import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParamas] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParamas(searchParams);
  }

  return (
    <Select
      options={options}
      $type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
