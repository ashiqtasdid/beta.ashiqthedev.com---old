import React from 'react'


const Temptweets = () => {
    return (
        <div>
            <div className="shadow p-3 mb-5 bg-white rounded card mt-5 mx-auto ml-auto mr-auto " style={{ width: 450 }} >

                <blockquote className="twitter-tweet d-inline-flex"><p lang="en" dir="ltr">As you know, We are using Twitter Revue for our Newsletter backend. As of today, Twitter Revue is currently down. They&#39;re trying to fix the issue. So, our newsletter will be down until they fix it. <a href="https://t.co/L7GhBq1ETM">pic.twitter.com/L7GhBq1ETM</a></p>&mdash; Ashiq The Dev - Beta Updates (@AshiqTheDevBeta) <a href="https://twitter.com/AshiqTheDevBeta/status/1545653882692734976?ref_src=twsrc%5Etfw">July 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                <div className="alert alert-success" role="alert">
                    If the tweet does not show up, please reload the page.
                </div>
            </div>
        </div>
    )
}

export default Temptweets