import React, {ReactElement} from "react";
import MenuLink from "../components/MenuLink";
import RootContainer from "../components/RootContainer";
import {IUsersManagementPageProps} from "../interfaces/IUsersManagementPageProps";
import {IUser} from "../interfaces/IUser";
import {GetStaticProps, NextPage} from "next";

const Users: NextPage<IUsersManagementPageProps> = ({users}):ReactElement => {
    return (
        <RootContainer keywords={'users'} title={'Users'}>

            <ul className="list-disc list-inside">
                {users.map(user =>
                    <li key={user.id}>
                        <MenuLink href={`/users/${user.id}`}>
                            {user.name}
                        </MenuLink>
                    </li>
                )}
            </ul>
        </RootContainer>
    );
};

export default Users;

export const getStaticProps:GetStaticProps<IUsersManagementPageProps> = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: IUser[] = await response.json();

    return {
        props: {users}
    }

}