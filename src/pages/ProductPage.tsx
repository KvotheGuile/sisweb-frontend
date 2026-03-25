
interface Props{
    message: string;
}

function ProductPage(props: Props)
{
    return (
        <>
            <h1>Product Page</h1>
            <h2>{props.message}</h2>
        </>
    )
}

export default ProductPage;