import React    from "react";

export const MyContext = React.createContext();

class Provider extends React.Component {
	constructor() {
		super();
		this.state = { 
			books:[],
			currentlyReading:[],
			wantToRead:[],
			read:[],
			addBooks: books => {
				const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
      			const read = books.filter(book => book.shelf === "read");
      			const wantToRead = books.filter(book => book.shelf === "wantToRead");
      			this.setState({books, currentlyReading, read, wantToRead});
			}, 
			moveBook: (book, newShelf, allShelfs) => {
				const newBooks = this.state.books.map(allBooks => {
					const foundId = allShelfs[newShelf].find(
						bookId => bookId === allBooks.id);
				
					if (foundId) {
						allBooks.shelf = newShelf;
					}
					return allBooks;
				});
				this.state.addBooks(newBooks)
			}
		};
	}
  render() {
    return (
    	<MyContext.Provider 
    		value={{...this.state}}>
    			{this.props.children}
    	</MyContext.Provider>
    );
  }
}

export default Provider;