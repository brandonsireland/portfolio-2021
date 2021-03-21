import React from 'react';
import Link from 'next/link';
 
const Footer: React.FC = () => {
    return ( 
        <footer>
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
        </footer>
     );
}
 
export default Footer;