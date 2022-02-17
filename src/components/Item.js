export default function Item ({id, title, pictureUrl, price}){
    return(
        <div className="boxItem">
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h4>{pictureUrl}</h4>
            <h5>{price}</h5>

        </div>
    )
}