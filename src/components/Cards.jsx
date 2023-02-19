const Cards=()=>{
    return(
        <section className="cards-container">
            <div className="cards-heading-div">
                <h2>Our Pricing Plans</h2>
                <p>
                    We only make money when our creators make money. Our plans are always affordable,
                    and it’s completely free to get started.
                </p>
            </div>
            <div className="cards-display-div">
                <div className="card">
                    <img src="./assets/icon-free.svg" alt={"free icon pre launch lp"} />
                    <h4>Dip your toe</h4>
                    <p>Just getting started? No problem at all! Our free plan will take you a long way. </p>
                    <h2>Free</h2>
                    <ul>
                        <li>Unlimited products</li>
                        <li>Basic analytics</li>
                        <li>Limited marketplace exposure</li>
                        <li>10% fee per transaction</li>
                    </ul>
                    
                </div>
                <section className="card">
                <img src="./assets/icon-paid.svg" alt={"icon free svg"} />
                <h4>Dive right in</h4>
                    <p>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
                    <h2>$25.00 /month</h2>
                    <ul>
                        <li>Custom domain</li>
                        <li>Advanced analytics and reports</li>
                        <li>High marketplace visibility</li>
                        <li>5% fee per transaction</li>
                    </ul>
                </section>
            </div>
        </section>
    )
}

export default Cards;