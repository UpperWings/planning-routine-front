import React, {useState, useContext} from 'react';
import  {BsSearch} from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../contexts/AppContext';

function SerachBar() {

  const [searchValue, setSearchValue ] = useState('');
  const {setProducts, setLoading} = useContext(AppContext);

  const handleSearch = async () => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos" 
        className="serch__input" 
        onChange={({target}) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="search__button" >
        <BsSearch/>
      </button>
    </form>
  );
}

export default SerachBar;
