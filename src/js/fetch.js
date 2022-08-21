import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGES = 40;
const KEY = '29365633-60606ea12614ba8c3cfb381aa';

const fetchPictures = async(searchQuery, page) => {
    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGES}&page=${page}`);
    return response.data; 
}
export default fetchPictures; 