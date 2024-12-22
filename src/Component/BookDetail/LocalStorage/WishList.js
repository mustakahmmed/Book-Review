

const getStordeWishList = () => {
    const storedWishList = localStorage.getItem('stored-book');
    if(storedWishList){
        return JSON.parse(storedWishList)
    }
    return [];
};

const saveWishList = (id) =>{
   const storedWishList = getStordeWishList();
   const exists = storedWishList.find(bookId => bookId === id);
   if(!exists){
    storedWishList.push(id);
    localStorage.setItem('stored-book',JSON.stringify(storedWishList))
   }
}

export {getStordeWishList,saveWishList};