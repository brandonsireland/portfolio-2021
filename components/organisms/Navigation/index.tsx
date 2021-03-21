import React from 'react';
import Link from 'next/link';
 
const Navigation: React.FC = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;