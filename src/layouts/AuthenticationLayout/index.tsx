import Wrapper from './Wrapper';
import Logo from '@images/mcrs';

type Props = {
    children: JSX.Element;
};

const AuthenticationLayout = (props: Props) => {
    return (
        <div className="min-h-screen min-w-full bg-auth-pattern flex items-center justify-center ">
            <Wrapper>
                <div className="flex items-center">
                    <Logo />
                    <span className="text-lg font-extrabold text-stone-500 ml-2">Skype</span>
                </div>
                {props.children}
            </Wrapper>
        </div>
    );
};

export default AuthenticationLayout;
