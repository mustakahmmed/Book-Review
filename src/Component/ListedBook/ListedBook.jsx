import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBook = ({Book}) => {
    const {bookId,image,bookName,author,tags,totalPages,rating,category,yearOfPublishing,publisher} = Book;
    return (
        <div className="border-1 rounded-2xl shadow-xl my-10 px-10 py-5">
            <div className="flex items-center">
                <div className="w-1/4 rounded-2xl">
                    <img src={image} alt="" />
                </div>
                <div className="">
                <h1 className="text-2xl font-bold">{bookName}</h1>
                <p className="my-2">By:{author}</p>
                <div className="flex justify-between">
                    <h1>Tag: </h1>
                    {
                        tags.map((tag,idx )=> <h1 className="px-4 py-1 rounded-full bg-slate-100 text-green-500 ml-2" key={idx}>{tag}</h1>)
                    }
                    <div className="flex justify-center items-center ml-4">
                        <IoLocationOutline></IoLocationOutline>
                        <h1>Year of Publishing: {yearOfPublishing}</h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex items-center mr-5 my-3">
                        <IoPeopleOutline></IoPeopleOutline>
                        <h1>Publisher: {publisher}</h1>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineContactPage></MdOutlineContactPage>
                        <h1>Pages:{totalPages}</h1>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between my-5">
                    <h1 className="px-4 py-1 rounded-full bg-slate-100 text-sky-500">Category: {category}</h1>
                    <h1 className="px-4 py-1 rounded-full bg-orange-100 text-orange-400">Rating: {rating}</h1>
                    <Link to={`/book/${bookId}`} className="px-4 py-1 rounded-full bg-green-500 text-white font-bold">View Details</Link>
                </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBook;