import React, { useState } from 'react';
import { Headers, Logo, HeaderList, Img, Hreff, DensityMediumIcons } from './Header.styled';
export default function Header() {
    const [Navbar, setNavbar] = useState(false)
    console.log(Navbar);
    return (
        <>
            <Headers>
                <Logo>
                    <Img
                        src='https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71' />
                    <DensityMediumIcons
                    />
                </Logo>
                <HeaderList>
                    <Hreff href="/">Home</Hreff>
                    <Hreff href="/">Our Team</Hreff>
                    <Hreff href="/">Gallery</Hreff>
                    <Hreff href="/">About Us</Hreff>
                    <Hreff href="/">Contact Us</Hreff>
                </HeaderList>
            </Headers>
        </>
    )
}
