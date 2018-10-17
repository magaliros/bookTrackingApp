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
			moveBook: (book, shelf) => {
				console.log(book,shelf)
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