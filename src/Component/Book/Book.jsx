import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId,image,bookName,author,category,tags,rating} = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>

            <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className="flex my-5">
        {
            tags.map((tag,idx) => <h1 className="px-4 py-1 rounded-full bg-slate-100 text-green-500 font-bold mr-2" key={idx}>{tag}</h1>)
        }
    </div>
    <h2 className="card-title mb-3">{bookName}</h2>
    <p>By: {author}</p>
    <hr className="my-4"/>
    <div className="flex justify-between items-center mb-4">
        <p>{category}</p>
        <p className="flex items-center"><CiStar></CiStar> {rating}</p>
    </div>
  </div>
</div>
            </Link>
        </div>
    );
};

export default Book;