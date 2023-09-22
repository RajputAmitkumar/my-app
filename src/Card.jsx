import "./card.css"

const Card = ({post}) => {

    // console.log(post.user)
    return (
        <>
            <section className="main-card">
                <header className="card-header">
                    <div>
                        <div className="header-name">{post.name}</div>
                        <div className="header-location">{post.location}</div>
                    </div>
                    {/* <div className="">

                    </div> */}
                </header>
                <main>
                    <img src={require("" + post.PostImage)} alt="image" />
                </main>
                <footer className="card-footer">
                    <div className="foot-icons">

                    <span><i className="fa fa-heart-o" aria-hidden="true"/></span>
                    <span><i className="fa fa-paper-plane" aria-hidden="true"/></span>
                    <span className="card-date">{post.date}</span>
                    </div>
                    <div>
                        <div>{post.likes} likes</div>
                        <div>{post.description}</div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Card;