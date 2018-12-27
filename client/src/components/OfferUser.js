import React from 'react';


const OfferButton =()=> {
    return (
        <div className="users-offer__button--center">
            <button className="users-offer__button users-offer__button--accept">Mwen aksepte</button> 
            <button className="users-offer__button users-offer__button--thinking">M'ap reflechi</button>
            <button className="users-offer__button users-offer__button--denied">Mwen refize</button>
        </div>
    )
}

const Users = (props) => {
    const users = props.U.map((users) => {
        return (
            <div key={users.id} className="users-offer">
                <img className="users-offer__image users-offer--center-image" src={users.UserPhoto.img} alt={users.UserPhoto.name}/>
                <h1 className="users-offer__username users-offer__username--color">{users.username}</h1>
                <p className="users-offer__givenAmount">Pre pou ba'w <span className="users-offer__givenAmount--OfferAmount">{users.given_amount} {users.devise.US} </span> nan <span className="users-offer__givenAmount--CurrentAmount ">{users.current_amount} { users.devise.US}</span> ou te mande a pou kay la</p>
                <OfferButton />
            </div>
        )
    })
    return (
        <div >
            {users}
        </div>
    )
}


const Offer = (props)=> {
    const usersOffers = [
        {
            id: 1,
            username: 'Elon Musk',
            UserPhoto: {
                name: "House",
                img: "https://images.unsplash.com/photo-1519673194369-40824d2e3a45?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2964dddf26173c3bbfce7fe39b2184cc&auto=format&fit=crop&w=334&q=80",

            },
            given_amount: "2500",
            current_amount: '4000',
            devise: {
                HTC: 'HTC',
                US: '$US'
            }
        },
        {
            id: 2,
            username: 'Mark Elliot Zuckerberg',
            UserPhoto: {
                name: "House",
                img: "https://images.unsplash.com/photo-1525856326341-8adeed4c8b8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=664eca9d03a5be8e34786a5222862411&auto=format&fit=crop&w=765&q=80"
            },
            given_amount: "4500",
            current_amount: '6000',
            devise: {
                HTC: 'HTC',
                US: '$US'
            }
        },
        {
            id: 3,
            username: 'Jeff Bezos',
            UserPhoto: {
                name: "House",
                img: "https://images.unsplash.com/photo-1525856326341-8adeed4c8b8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=664eca9d03a5be8e34786a5222862411&auto=format&fit=crop&w=765&q=80"
            },
            given_amount: "6500",
            current_amount: '8000',
            devise: {
                HTC: 'HTC',
                US: '$US'
            }
        }
    ];
    return(
        <div >
            <Users U={usersOffers} />
           
        </div>
    )
}



export default Offer;