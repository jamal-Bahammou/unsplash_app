import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		const response = await unsplash.get(
			'https://api.unsplash.com/search/photos',
			{
				params: { query: term },
				headers: {
					Authorization:
						'Client-ID 7695a9881dff45b0f2dd43203dae51e5f3db85982b179a8e6e7748886ed71ad6'
				}
			}
		);

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
