import { useState } from "react"


const SeedSearcher = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `http://localhost:8080/api/seeds/${searchTerm}`
          );
          setDataSeeds(response.data);
          setNoResults(response.data.length === 0);
        } catch (error) {
          console.log("Error al realizar la búsqueda:", error);
        } finally {
          setIsLoading(false);
        }
      };
    
      const handleChange = (event) => {
        setSearchTerm(event.target.value);
        handleSearch();
      };

  return (
    <div>SeedSearcher</div>
  )
}

export default SeedSearcher