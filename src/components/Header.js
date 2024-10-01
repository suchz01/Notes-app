import React from 'react';

const Header = ({ handleToggleDarkMode,darkMode }) => {
	return (
		<div className='flex items-center justify-between p-4'>
			<h1 className='text-4xl font-bold text-green-500'>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className={`bg-slate-200 hover:bg-slate-100 p-2 rounded-full hover:cursor-pointer ${darkMode?"text-white bg-slate-700 hover:bg-slate-600":"text-black"}`}
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
