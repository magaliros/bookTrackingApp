import React    from "react";
import Shelf from '../../components/Shelf';
import OpenSearch from '../../components/OpenSearch';
import { getAll } from '../../BooksAPI';

/*
* Thanks to Forrest Walker for his walkthrough:
* https://www.youtube.com/watch?v=bpKI3R0nf7E
*/

class Home extends React.Component {
	async componentDidMount(){
		try {
			const books = await getAll();
      this.props.addBooks(books);
		} catch( error ) {
			console.log(error)
		}
	}

  render() {
    return (
    	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf 
                  title="Currently Reading" 
                  books={this.props.currentlyReading}
                  moveBook={this.props.moveBook}
                />
                <Shelf 
                  title="Want to Read" 
                  books={this.props.wantToRead}
                  moveBook={this.props.moveBook}
                />
                <Shelf 
                  title="Read" 
                  books={this.props.read}
                  moveBook={this.props.moveBook}/>
              </div>
            </div>
            <OpenSearch/>
          </div>
        );
  }
}

export default Home;
