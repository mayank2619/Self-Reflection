import {data} from './constant/data.js'
import news from './model/news.js';


const defaultData = async ()=>{


try{
await news.deleteMany({});
await news.insertMany(data);
console.log("data is imported");
}

catch(error){
    console.log(error);

}

}
export default defaultData;