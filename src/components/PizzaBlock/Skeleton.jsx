import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="125" r="125" />
        <rect x="0" y="280" rx="0" ry="0" width="267" height="0" />
        <rect x="0" y="282" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="325" rx="10" ry="10" width="280" height="88" />
        <rect x="4" y="433" rx="10" ry="10" width="85" height="27" />
        <rect x="127" y="426" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
