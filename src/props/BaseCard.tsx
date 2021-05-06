
interface BaseCardProps {
    cardTitle: string
}

export const BaseCard:React.FC<BaseCardProps> = ({cardTitle, children}) => {


    return (

        <div >
            <div style={{border:'2px solid red', maxWidth:150}}>
                <h3>{cardTitle}</h3>
            </div>
            <div style={{border:"2px solid blue", maxWidth:150}}>
                {children}
            </div>
        </div>

    )
}