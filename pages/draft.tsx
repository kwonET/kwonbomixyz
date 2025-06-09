import React from 'react';
import { draftSources } from '@/data/drafts';
import DraftLayout from 'components/DraftLayout';

const Draft = () => {
    return (
        <>
            <DraftLayout drafts={draftSources} />
        </>
    );
};

export default Draft; 