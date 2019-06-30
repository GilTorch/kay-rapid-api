import React from 'react';
import Sliders from './carousel';
import { Address, Rating, Price, Description, Comment } from './HouseInfos';
import HeaderBar from './HeaderBar';
import HouseMap from './HouseMap';

function HouseDetails(props) {
    return (
        <div>
            <HeaderBar title="Detay Sou Kay La" hasBack={true} />
            <Sliders>
                <img src="https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a1532b84f66efdf63f7af7b1f0493f5&auto=format&fit=crop&w=1458&q=80/&text=slide1" alt="" />
                <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a89aadd142f6b7fb7d4ae8196acd51cb&auto=format&fit=crop&w=401&q=80/text=slide2" alt="" />
                <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a89aadd142f6b7fb7d4ae8196acd51cb&auto=format&fit=crop&w=401&q=80/text=slide3" alt="" />
            </Sliders>
            <div className="InfoHouse__name">
                <h1>{"Bilbon Sacquet"} (propryetè)</h1>
            </div>
            <Price value={2550} currency="US" leaseType="yearly" index="1" negotiable={true} />
            <Rating value={4} />
            <div className="InfoHouse--margin-left-right">
                <Address value="Fermathe 52,rue Puzot #2" />
                <HouseMap lng={-155.74919} lat={48.24816} zoom={1} />
                <Description desciptionInfo={["3 chanm akouche", "1 salon", "1 sal a manje", " 2 douch"].join(", ")} klasmans={["stars", "stars"]} />
                {/* <Comment /> */}
            </div>
        </div>

    )
}

export default HouseDetails; 