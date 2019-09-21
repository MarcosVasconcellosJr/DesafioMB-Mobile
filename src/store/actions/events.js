import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

export function getList() {
    return {
        type: USER_LOGGED_IN,
        payload: [
            {},
            {},
            {},
            {},
            {}
        ]
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}
      
      
    payload: [
        { id: '1', photoUrl: 'https://www.growweedeasy.com/wp-content/uploads/2012/05/purple-auto-frisian-dew.jpg', name: 'LemonRaze', quantity: '7g' },
        { id: '2', photoUrl: 'https://www.dutchfem.com/wp-content/uploads/2017/11/bubblekush-cannabis-seeds.jpg', name: 'BubbleKush', quantity: '21g' },
        { id: '3', photoUrl: 'https://www.420magazine.com/community/gallery/bubble-kush-photo.1599663/full', name: 'JettyLadding', quantity: '4g' },
        { id: '4', photoUrl: 'https://www.growweedeasy.com/wp-content/uploads/2012/05/purple-auto-frisian-dew.jpg', name: 'NatureMix', quantity: '1g' },
        { id: '5', photoUrl: 'https://www.420magazine.com/community/gallery/bubble-kush-photo.1599663/full', name: 'Diagrama Pintada', quantity: '19g' },
        { id: '6', photoUrl: 'https://www.dutchfem.com/wp-content/uploads/2017/11/bubblekush-cannabis-seeds.jpg', name: 'Onça Pintada', quantity: '78g' },
    ]