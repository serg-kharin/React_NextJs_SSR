import MenuLink from "./MenuLink";
import Head from "next/head";
import React from "react";

const RootContainer = ({children, title, keywords}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="Keywords" content={keywords} />
            </Head>

            <div className={'navbar-nav flex space-x-3 bg-gray-800'}>
                <MenuLink href="/" className={'nav-item m-4 text-white font-medium'}>
                    Home
                </MenuLink>
                <MenuLink href="/users" className={'nav-item m-4 text-white font-medium'}>
                    Users
                </MenuLink>
            </div>
            <div className={'m-3'}>
                <h1 className={'text-4xl'}>{title}</h1>
                {children}
            </div>
        </>
    );
};

export default RootContainer;