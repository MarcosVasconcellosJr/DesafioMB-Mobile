import { EVENT_GET_LIST } from './actionTypes'

export function getList() {
    return {
        type: EVENT_GET_LIST,
        payload: [
            { id: '1', imageLink: 'https://www.growweedeasy.com/wp-content/uploads/2012/05/purple-auto-frisian-dew.jpg', title: 'LemonRaze', theme: '7g', local: 'kkkkkk', local: 'Umuarama', category: ['Entretenimento', 'Musica', 'Politica'], description: 'Lorem ipsum dolor loren mafitzu', price: '700', unsold: '20', duration: '20m' },
            { id: '2', imageLink: 'https://www.dutchfem.com/wp-content/uploads/2017/11/bubblekush-cannabis-seeds.jpg', title: 'BubbleKush', theme: '21g', local: 'kkkkkk', local: 'Umuarama', category: ['Entretenimento', 'Musica', 'Politica'], description: 'Lorem ipsum dolor loren mafitzu', price: '700', unsold: '20', duration: '20m' },
            { id: '3', imageLink: 'https://www.420magazine.com/community/gallery/bubble-kush-photo.1599663/full', title: 'JettyLadding', theme: '4g', local: 'kkkkkk', local: 'Umuarama', category: ['Entretenimento', 'Musica', 'Politica'], description: 'Lorem ipsum dolor loren mafitzu', price: '700', unsold: '20', duration: '20m' },
            { id: '4', imageLink: 'https://www.growweedeasy.com/wp-content/uploads/2012/05/purple-auto-frisian-dew.jpg', title: 'NatureMix', theme: '1g', local: 'kkkkkk', local: 'Umuarama', category: ['Entretenimento', 'Musica', 'Politica'], description: 'Lorem ipsum dolor loren mafitzu', price: '700', unsold: '20', duration: '20m' },
            { id: '5', imageLink: 'https://www.420magazine.com/community/gallery/bubble-kush-photo.1599663/full', title: 'Diagrama Pintada', theme: '19g', local: 'kkkkkk', local: 'Umuarama', category: ['Entretenimento', 'Musica', 'Politica'], description: 'Lorem ipsum dolor loren mafitzu', price: '700', unsold: '20', duration: '20m' },
            { id: '6', imageLink: 'https://www.dutchfem.com/wp-content/uploads/2017/11/bubblekush-cannabis-seeds.jpg', title: 'Onça Pintada', theme: '78g', local: 'kkkkkk', local: 'Umuarama', category: ['Entretenimento', 'Musica', 'Politica'], description: 'Lorem ipsum dolor loren mafitzu', price: '700', unsold: '20', duration: '20m' },
        ]
    }
}
