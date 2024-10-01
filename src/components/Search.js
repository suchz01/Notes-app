import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote,darkMode }) => {

	const bar=darkMode?"bg-gray-400 placeholder:text-white text-white":"bg-gray-200 placeholder:text-black"
	return (
		<div className={`${bar} flex p-4 rounded-2xl m-5 mx-0`}>
			<MdSearch className='search-icons ' size='1.3em' />
			<input
			 className={`${bar} outline-none border-none bg-gray-200 px-3 `}
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search;
