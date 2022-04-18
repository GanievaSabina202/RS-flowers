import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { Headers, Logo, HeaderList } from './Header.styled'
export default function Header() {
    return (
        <>
            <Headers>
                <Logo>
                </Logo>
                <HeaderList>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/">
                        <a>Our Team</a>
                    </Link>
                    <Link href="/">
                        <a>Gallery</a>
                    </Link>
                    <Link href="/">
                        <a>About Us</a>
                    </Link>
                    <Link href="/">
                        <a>Contact Us</a>
                    </Link>
                </HeaderList>
            </Headers>
        </>
    )
}
