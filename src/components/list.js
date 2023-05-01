export function ListComponent(props){
    return (
        <>
            {
                props.listita && 
                props.listita.map((item,index)=> <h4 key={index}>{item}</h4>)
            }
        </>
    )
}