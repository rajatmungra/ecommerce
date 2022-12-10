import Category from './models/Category.js';
import products from './constants/data.js';

const Defaultdata = async () => {
    try {
        await (await Category.deleteMany({}));
        await Category.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default Defaultdata;