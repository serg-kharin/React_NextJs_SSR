import type { NextPage } from 'next';
import RootContainer from "../components/RootContainer";
import React from "react";

const Index: NextPage = () => {
    return (
        <RootContainer title={'Main Page'} keywords={'Sergey Kharin'}>
            <div className={'text-lg text-slate-700 mt-3'}>
                Easy SSR with Next.js, let's check an user
            </div>
        </RootContainer>
    );
};

export default Index;