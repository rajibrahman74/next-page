import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <BoltIcon/>
                <span>NextPage</span>
            </div>
        </div>
    );
};

export default Header;