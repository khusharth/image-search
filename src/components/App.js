import React from "react";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';
import unsplash from '../api/unspash';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                {/* onSubmit can be named anything as its a prop on our component */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
