const Search = ({searchHandler}) => {
  return (
    <div className="search">
        <input type="text" name="search" id="search" 
        onChange={(e)=>searchHandler(e.target.value)}/>
    </div>
  )
}

export default Search