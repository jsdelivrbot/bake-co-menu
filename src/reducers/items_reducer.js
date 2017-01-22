import { ADD_ITEM } from '../actions/add-item'
import { DELETE_ITEM } from '../actions/delete-item'

const defaultState = [
  {
    name: 'Bagel' ,
    image: 'https://whateversleftdotorg.files.wordpress.com/2014/03/dsc_1354-3.jpg',
    description: 'Fresh homemade bagel with a generous sprinkling of sesame seeds.',
    price: 2.50,
    available: true,
  },
  {
    name: 'Chocolate & Caramel Brownie' ,
    image: 'http://www.bunsinmyoven.com/wp-content/uploads/2012/03/dulce-de-leche-and-brownies.jpg',
    description: 'Rich chocolate brownie. Crisp on top with a gooey caramel centre.',
    price: 4.00,
    available: true,
  },
  {
    name: 'Banana Bread' ,
    image: 'http://foodiepages.ca/blog/wp-content/uploads/2013/08/bananabread1-e1377619783239.jpg',
    description: 'A gorgeous afternoon tea treat. Super moist and hearty.',
    price: 3.90,
    available: true,
  },
  {
    name: 'Gluten free Waffle',
    image: 'http://cookieandkate.com/images/2014/09/easy-gluten-free-oat-waffles.jpg',
    description: 'Light, crispy-on-the-outside, fluffy-on-the-inside, gluten-free. They\'re heart healthy, too.',
    price: 5.70,
    available: true,
  }
]

export default (state = defaultState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      const item = {
        name: action.payload.name,
        image: action.payload.image,
        description: action.payload.description,
        price: action.payload.price,
        available: JSON.parse(action.payload.available) // Parse string into boolean
      }
      return state.concat([ item ])

    case DELETE_ITEM:
      return state.filter((item) => {
        return item.name != action.payload
      })

    default:
      return state
  }
}
