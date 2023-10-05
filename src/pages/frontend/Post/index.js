import React, { useEffect, useState } from "react";


import Post from "../../../components/frontend/postitem";

import postservice from "../../../services/PostService";


function Home() {

    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(1);
    useEffect(function () {
        (function () {
            postservice.getProductAll(limit, 1).then(function (result) {
                setPosts(result.data.posts);
            });
        })();
    }, [limit])
    return (<section className="maincontent">
        <div className="container my-3">
            <div className="product-category">
               
                <div className="row my-3">
                    {
                        posts.map(function (post, index) {
                            return <Post post={post} key={index} />;
                        })}

                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-success" onClick={() => setLimit(limit + 1)}>Xem thêm </button>
                </div>
            </div>
            
        </div>
    </section >
    )
};
export default Home;


