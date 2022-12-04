import {GetServerSidePropsContext} from "next";

export interface IUserGetServerSidePropsContext extends GetServerSidePropsContext{
    params:
        {
            id: string
        }
}