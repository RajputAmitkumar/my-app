import { useEffect, useState } from "react";
import Card from "../../Card"
import Header from "../header/Header"
import { Link } from "react-router-dom";

const Postview = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3004/user").then((res) => res.json()).then((data) => {
            setPosts(data)
        }).catch((err) => {
            if (err) {
                console.log("aagaya errrr", err)
            }
        })
    }, [])
    return (
        <>
            <Header />
            <div>
                {posts.map((post, i) => {
                    return (
                        <Card post={post} key={i} />
                    )
                })}
            </div>
            {/* <div>
                <Link to='/landingPage'>
                <button>home page</button>
                </Link>
            </div> */}
        </>
    )
}

export default Postview;