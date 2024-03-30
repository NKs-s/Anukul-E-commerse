import React, { useContext, useState } from 'react';
import myContext from '../../../context/data/myContext'; // Import Firebase storage
import { storage } from '../../../fireabase/FirebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    const [image, setImage] = useState(null); // State to store the selected image

    // Function to handle file upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytesResumable(storageRef, file);
        const imageUrl = await getDownloadURL(storageRef);
        setImage(imageUrl);
        setProducts({ ...products, imageUrl }); // Update the product's imageUrl state
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*" // Specify that only image files are allowed
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white outline-none'
                    />
                    <div>
                        <input
                            type="text"
                            value={products.title}
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                            name='title'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder-text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                            name='price'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder-text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <select
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white outline-none'
                        >
                            <option value="">Select category</option>
                            <option value="kitchenware">Kitchenware</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            cols="30"
                            rows="10"
                            value={products.description}
                            onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder-text-gray-200 outline-none'
                            placeholder='Product description'
                            maxLength={69} // Add maxlength attribute to limit characters
                        ></textarea>
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            onClick={addProduct}
                            className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
