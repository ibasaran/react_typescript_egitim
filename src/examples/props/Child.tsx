
interface ChildProps {
    name:string,
    myfunc: (mesaj:string) => void,
    childComp: React.ReactNode
}

export const Child: React.FC<ChildProps> = ({name,myfunc, childComp, children}) => {

    return (
        <div> <h3>{name}</h3> <br></br>
            <button onClick={() => myfunc('Merhaba Dünya')}>Konsola Yaz</button>
            {childComp}

            <br />

            {children}
        </div>
    );
}