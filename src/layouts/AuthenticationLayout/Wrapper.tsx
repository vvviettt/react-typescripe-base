type Props = {
    children: React.ReactNode;
};

const Wrapper: React.FC<Props> = (props) => {
    return (
        <div className="shadow-auth-shadow bg-white px-11 py-11 min-h-[21.125rem] min-w-[27.5rem]">
            {props.children}
        </div>
    );
};

export default Wrapper;
