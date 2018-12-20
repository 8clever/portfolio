export function Scroll (props) {
    return (
        <div className="w-100 h-100 scroll">
            {
                props.container ?
                <div className="container pt-3">
                    {props.children}
                </div> :
                props.children
            }
        </div>
    );
}