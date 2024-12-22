import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="flex items-center justify-around bg-slate-100 rounded-xl my-20 py-10">
                <div>
                    <h1 className="text-5xl font-bold text-left">Books to freshen up<br></br>your bookshelf</h1>
                    <Link to="/listed">
                        <button className="btn text-xl font-bold text-white px-4 py-2 bg-emerald-500 my-10">View The List</button>
                    </Link>
                </div>
                <div>
                    <img src="/public/pngwing 1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;