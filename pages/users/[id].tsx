import React, {ReactElement} from "react";
import RootContainer from "../../components/RootContainer";
import {IUserPageProps} from "../../interfaces/IUserPageProps";
import {IUser} from "../../interfaces/IUser";



const User = ({user}: IUserPageProps): ReactElement => {

    function returnList(obj: any): ReactElement {
        return (
            <ul className="list-disc list-inside pl-5 space-y-1">
                {
                    Object.keys(obj).map(key => {
                        if (Array.isArray(obj[key]) || typeof obj[key] === 'object') {

                            return <li key={key}>{key}
                                        {returnList(obj[key])}
                                    </li>
                        } else {
                            return <li key={key}>{key}: {obj[key]}</li>
                        }
                    })
                }
            </ul>
        );
    }


    return (
        <RootContainer title={user.name} keywords={user.name}>
            <div>
                {
                    returnList(user)
                }
            </div>
        </RootContainer>
    );
};

export default User;

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user: IUser = await response.json() as IUser;

    return {
        props: {user}
    }

}
