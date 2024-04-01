import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';

function Order() {
    const userid = JSON.parse(localStorage.getItem('user')).user.uid;
    const context = useContext(myContext);
    const { mode, loading } = context;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const q = query(collection(fireDB, 'order'), where('userid', '==', userid));
            const querySnapshot = await getDocs(q);
            const fetchedOrders = [];
            querySnapshot.forEach(doc => {
                fetchedOrders.push({ id: doc.id, ...doc.data() });
            });
            setOrders(fetchedOrders);
        };

        fetchOrders();
    }, [userid]);

    return (
        <Layout>
            {loading && <Loader />}
            {orders.length > 0 ? (
                <>
                    <div className="h-full pt-10">
                        {orders.map((order) => {
                            return (
                                <div key={order.id} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                                    {order.cartItems.map((item) => {
                                        return (
                                            <div key={item.id} className="rounded-lg md:w-2/3">
                                                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                                                    <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                        <div className="mt-5 sm:mt-0">
                                                            <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                                                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                                                            <h3 className="text-xm font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Delevery Status: {order.status}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <h2 className='text-center tex-2xl text-white'>No Orders</h2>
            )}
        </Layout>
    );
}

export default Order;
