import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";


const ListedBooks = () => {
    const allBooks= useLoaderData();
    const [Books,Setbooks]=useState([])
    useEffect(()=>{
        const stringyfiedWishbooksId = localStorage.getItem('stored-book')
        const WishbooksId =JSON.parse(stringyfiedWishbooksId)
        // console.log(WishbooksId ,allBooks);
        const WishedBooks =[];
        for (let id of WishbooksId) {
           const book = allBooks.find(book => book.bookId === id)
           if(book){
            WishedBooks.push(book);
           }
                       
        }
        Setbooks(WishedBooks)
        console.log(WishedBooks);
        
    },[])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-10 rounded-2xl bg-slate-100 mt-7 mb-14">Wish Books</h1>
            <div>
                {
                    Books.map((Book,idx) => <ListedBook Book={Book} key={idx}></ListedBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;