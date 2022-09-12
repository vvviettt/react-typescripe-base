import React from 'react';
import { Link } from 'react-router-dom';
const Login: React.FC = () => {
    return (
        <div>
            <div className="my-3">
                <h3 className="text-2xl font-semibold text-default mb-4">Sign in</h3>
                <input
                    type="text"
                    placeholder="Email or phone"
                    className="outline-none border-b border-stone-800 focus:border-blue-600 w-full py-1.5 pr-2.5 text-sm h-9 mb-4"
                />
                <p className=" text-[13px] mb-4">
                    No account?
                    <Link className="text-[#0067b8] hover:underline" to="/auth/register">
                        Create one!
                    </Link>
                </p>
                
                <div className="flex justify-end">
                    <button className="bg-[#0067b8] text-white py-1 px-3 min-w-[6.75rem] text-sm min-h-[2.25rem]">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
