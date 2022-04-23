import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Container,
    Grid,
    List,
} from '@mui/material';

import {
    FooterWrap,
    UlWrapper,
    Href,
    ListItem,
    Span,
    SosialNetwork,
    BgImg
} from './Footer.styled'

export default function Footer() {
    return (
        <FooterWrap>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                >
                    <Grid lg={4} md={4} sm={6} xs={12}>
                        <UlWrapper>
                            WORKING HOURS
                            <ListItem >
                                <Href>
                                    <Span>Monday</Span>: 10AM – 9PM
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>
                                        Tuesday</Span>: 10AM – 9PM
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Wednesday</Span>: 10AM – 9PM
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Thursday</Span>: 10AM – 9PM
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Friday</Span>: 10AM – 9PM
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Saturday</Span>: 10AM – 5PM
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Sunday </Span>: Closed
                                </Href>
                            </ListItem>
                        </UlWrapper>
                    </Grid>

                    <Grid lg={4} md={4} sm={6} xs={12}>
                        <UlWrapper>
                            WHERE TO FIND US
                            <ListItem >
                                <Href>
                                    <Span>Adress 1</Span>: London, street 12A
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Adress 2</Span>: London, street 79A
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Phone 1</Span>: XXX-XX-XX
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Phone 2</Span>: YYY-YY-YY
                                </Href>
                            </ListItem>
                            <ListItem >
                                <Href>
                                    <Span>Email</Span>: Blabla@gmail.com
                                </Href>
                            </ListItem>
                        </UlWrapper>
                    </Grid>

                    <Grid lg={4} md={4} sm={6} xs={12}>
                        <UlWrapper>
                            FOLLOW OUR
                            <SosialNetwork>
                                <ListItem>
                                    <Href href="/">
                                        <InstagramIcon />
                                    </Href>
                                </ListItem>
                                <ListItem >
                                    <Href href="/">
                                        <FacebookIcon />
                                    </Href>
                                </ListItem>
                                <ListItem >
                                    <Href href="/">
                                        <TwitterIcon />
                                    </Href>
                                </ListItem>
                            </SosialNetwork>
                        </UlWrapper>
                        <BgImg src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-2.png" />
                    </Grid>
                </Grid>
            </Container>
        </FooterWrap>
    )
}
