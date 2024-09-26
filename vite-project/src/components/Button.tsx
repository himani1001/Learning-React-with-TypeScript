

interface Props {
    children: string;
    onClick: () => void;
    //optional
    color?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ children, onClick, color }: Props) => {
    return (
        <div>
            <button className={'btn btn-' + color} onClick={onClick}>{ children }</button>
        </div>
    )
}

export default Button