
import Book from "../Book/Book";

const Books = ({books}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-6">Books</h1>
           <div className="grid grid-cols-3 gap-5">
           {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
           </div>
            
        </div>
    );
};

export default Books;