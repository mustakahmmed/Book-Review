import { useLoaderData, useParams } from "react-router-dom";
import { saveWishList } from "./LocalStorage/WishList";
import { ToastContainer, toast } from 'react-toastify';

const BookDetail = () => {
    const books = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt)
    const {bookName,author,image,review,totalPages,category,tags,publisher,yearOfPublishing,rating} = book;


    const notify = () => {
        saveWishList(idInt)
        toast('You have add a book on watch list')
    };

    return (
        <div>
            <div className="flex gap-16 items-start justify-center my-20">
            <div className="flex-1 bg-slate-100 rounded-xl">
                    <img className="mx-auto w-2/4 py-10 h-full my-auto " src={image} alt="" />
             </div>   
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="text-xl my-5">By: {author}</p>
                    <hr/>
                    <p className="text-xl my-5">{category}</p>
                    <hr />
                    <p className="text-gray-500 py-5"><span className="font-bold text-black">Review: </span>{review}</p>
                    <div className="flex items-center my-5">
                        <h1>Tag:</h1>
                        {
                            tags.map((tag,idx) => <h1 className="px-4 py-1 rounded-full bg-slate-50 font-semibold text-green-500 mx-4" key={idx}>{tag}</h1>)
                        }
                    </div>
                    <hr />
                    <h1 className="text-xl my-4"><span className="text-gray-500">Number of Pages: </span> {totalPages}</h1>

                    <h1 className="text-xl my-4"><span className="text-gray-500">Publisher: </span>{publisher}</h1>

                    <h1 className="text-xl my-4"><span className="text-gray-500">Year of Publishing: </span>{yearOfPublishing}</h1>

                    <h1 className="text-xl my-4"><span className="text-gray-500">Rating: </span>{rating}</h1>

                    <div>
                        <button className="btn px-5 mr-4  border-2 border-black">Read</button>
                        <button onClick={notify} className="btn px-5 bg-green-500 font-bold text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetail;

