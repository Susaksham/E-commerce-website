import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
const initialState = {
  filters: {
    tradeAssurance: false,
    verifiedSuppliers: false,
    readyToShip: false,
    paidSamples: false,
    newStuff: false,
    secondStuff: false,
  },
  totalFilters: 0,
  filteredIcons: [],
  loading: false,
  cart: [],
  data: [
    // {
    //   id: '0',
    //   productName: 'Huawei MateBook X Pro',
    //   filters: {
    //     tradeAssurance: true,
    //     verifiedSuppliers: false,
    //     readyToShip: true,
    //     paidSamples: true,
    //     newStuff: false,
    //     secondStuff: false,
    //   },
    //   star: 3.0,
    //   image:
    //     'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=',
    //   cpu: 'Intel Core i7, 8th generation',
    //   ram: '8GB',
    //   storage: '512 GB SSD',
    //   screen: '13.9-inch, 3K (3,000 x 2,080)',
    //   price: '1499',
    //   description:
    //     'The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money.',
    // },
    // {
    //   id: '1',
    //   productName: 'Apple Macbook Pro 2018',
    //   filters: {
    //     tradeAssurance: true,
    //     verifiedSuppliers: false,
    //     readyToShip: false,
    //     paidSamples: false,
    //     newStuff: false,
    //     secondStuff: false,
    //   },
    //   star: 4.0,
    //   image:
    //     'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=',
    //   cpu: '6-core Intel i7, 8th generation',
    //   ram: '16GB',
    //   storage: '1TB GB SSD',
    //   screen: '15-inch Retina display',
    //   price: '3199',
    //   description:
    //     "If you're after the latest and greatest laptop from Apple, we suggest you look into the 2018 model of the 15-inch MacBook Pro with Touch Bar. The headline Touch Bar – a thin OLED display at the top of the keyboard which can be used for any number of things, whether that be auto-suggesting words as you type or offering Touch ID so you can log in with just your fingerprint – is of course included. It's certainly retained Apple's sense of style, but it comes at a cost. This is a pricey machine, so you may want to consider one of the Windows alternatives. But, if you're a steadfast Apple diehard, this is definitely the best laptop for you!",
    // },
    // {
    //   id: '2',
    //   productName: 'Dell XPS 13',
    //   filters: {
    //     tradeAssurance: false,
    //     verifiedSuppliers: true,
    //     readyToShip: false,
    //     paidSamples: true,
    //     newStuff: false,
    //     secondStuff: false,
    //   },
    //   star: 5.0,
    //   image:
    //     'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=',
    //   cpu: 'Intel Core i7, 8th generation',
    //   ram: '16GB',
    //   storage: '512 GB SSD',
    //   screen: '13.3-inch, Full HD',
    //   price: '1299',
    //   description:
    //     'The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less ‘Infinity Edge’ display, this Dell XPS 13 continues to be the most popular Windows laptop in the world. What’s more, there’s a wide range of customization options, so you can really make the Dell XPS 13 the best laptop for your needs. ',
    // },
    // {
    //   id: '3',
    //   productName: 'Asus ZenBook Flip S',
    //   filters: {
    //     tradeAssurance: false,
    //     verifiedSuppliers: false,
    //     readyToShip: false,
    //     paidSamples: false,
    //     newStuff: false,
    //     secondStuff: false,
    //   },
    //   star: 1.0,
    //   image:
    //     'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=',
    //   cpu: 'Intel Core i7, 8th generation',
    //   ram: '16GB',
    //   storage: '512 GB SSD',
    //   screen: '13.3-inch, Full HD touchscreen',
    //   price: '1399',
    //   description:
    //     "Asus has struck gold with its new refresh of its ZenBook Flip S 2-in-1 laptop. With a new Kaby Lake R 8th-generation processor powering the device, plenty of RAM and a super-fast PCIe SSD in certain models, this is an absolutely stunning laptop. Its 2-in-1 design means you can use it as both a laptop and a tablet, and while it's not as affordable as some other machines, if you have the budget you'll be really happy with this fantastic device.",
    // },
    // {
    //   id: '4',
    //   productName: 'Samsung Notebook 9',
    //   filters: {
    //     tradeAssurance: true,
    //     verifiedSuppliers: true,
    //     readyToShip: false,
    //     paidSamples: true,
    //     newStuff: false,
    //     secondStuff: true,
    //   },
    //   star: 5.0,
    //   image:
    //     'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=',
    //   cpu: 'Intel Core i7, 8th generation',
    //   ram: '16GB',
    //   storage: '256 GB SSD',
    //   screen: '15-inch, Full HD',
    //   price: '1499',
    //   description:
    //     'While it may not have the best keyboard in the world, the Samsung Notebook 9 is still one of the best laptops you can buy in 2018. Packed with more horsepower than some MacBook Pros,but at a much lower price, Samsung has crafted a laptop that has just as much substance as it does style. Plus, on top of its killer specs, it’s lightweight and thin, making this one of the most portable 15-inch laptops you can buy today.',
    // },
  ],

  searchString: '',
}
const filter = createSlice({
  name: 'filtered',
  initialState: initialState,
  reducers: {
    addData(state, action) {
      state.data = [...action.payload]
    },
    changeSearchString(state, action) {
      state.searchString = action.payload
    },
    change(state, action) {
      const obj = { ...action.payload }
      console.log(obj)
      if (obj.type === 'tradeAssurance') {
        if (state.filters.tradeAssurance === true) {
          state.totalFilters = state.totalFilters - 1
        } else {
          state.totalFilters = state.totalFilters + 1
        }
        state.filters.tradeAssurance = !state.filters.tradeAssurance
      } else if (obj.type === 'verifiedSuppliers') {
        if (state.filters.verifiedSuppliers === true) {
          state.totalFilters = state.totalFilters - 1
        } else {
          state.totalFilters = state.totalFilters + 1
        }

        state.filters.verifiedSuppliers = !state.filters.verifiedSuppliers
      } else if (obj.type === 'readyToShip') {
        if (state.filters.readyToShip === true) {
          state.totalFilters = state.totalFilters - 1
        } else {
          state.totalFilters = state.totalFilters + 1
        }
        state.filters.readyToShip = !state.filters.readyToShip
      } else if (obj.type === 'paidSamples') {
        if (state.filters.paidSamples === true) {
          state.totalFilters = state.totalFilters - 1
        } else {
          state.totalFilters = state.totalFilters + 1
        }
        state.filters.paidSamples = !state.filters.paidSamples
      } else if (obj.type === 'newStuff') {
        if (state.filters.newStuff === true) {
          state.totalFilters = state.totalFilters - 1
        } else {
          state.totalFilters = state.totalFilters + 1
        }
        state.filters.newStuff = !state.filters.newStuff
      } else if (obj.type === 'secondStuff') {
        if (state.filters.secondStuff === true) {
          state.totalFilters = state.totalFilters - 1
        } else {
          state.totalFilters = state.totalFilters + 1
        }
        state.filters.secondStuff = !state.filters.secondStuff
      }
    },
    add(state, action) {
      const obj = { ...action.payload }

      if (obj.type === 'tradeAssurance') {
        state.filteredIcons.push({ icon: 'tradeAssurance', id: 1 })
      } else if (obj.type === 'verifiedSuppliers') {
        state.filteredIcons.push({ icon: 'verifiedSuppliers', id: 2 })
      } else if (obj.type === 'readyToShip') {
        state.filteredIcons.push({ icon: 'readyToShip', id: 3 })
      } else if (obj.type === 'paidSamples') {
        state.filteredIcons.push({ icon: 'paidSamples', id: 4 })
      } else if (obj.type === 'newStuff') {
        state.filteredIcons.push({ icon: 'newStuff', id: 5 })
      } else if (obj.type === 'secondStuff') {
        state.filteredIcons.push({ icon: 'secondStuff', id: 6 })
      }
    },
    remove(state, action) {
      const obj = { ...action.payload }

      state.filteredIcons = state.filteredIcons.filter((elem) => {
        return elem.icon !== obj.type
      })
    },
    clear(state, action) {
      state.filteredIcons = []
      for (const element in state.filters) {
        state.filters[element] = false
      }
      state.totalFilters = 0
    },
    addToCart(state, action) {
      const productObj = { ...action.payload }
      console.log(productObj)
      const indexOfProduct = state.cart.findIndex((element) => {
        return productObj.id === element.id
      })
      console.log('index of ' + indexOfProduct)
      if (indexOfProduct < 0) {
        state.cart.push({ ...productObj, items: 1 })
      } else if (indexOfProduct >= 0) {
        state.cart[indexOfProduct].items++
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      const indexOfProduct = state.cart.findIndex((element) => {
        return id === element.id
      })
      if (state.cart[indexOfProduct].items === 1) {
        state.cart = state.cart.filter((element) => {
          return element.id !== id
        })
      } else if (state.cart[indexOfProduct].items > 1) {
        state.cart[indexOfProduct].items--
      }
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
  },
})

export const filterAction = filter.actions
export default filter.reducer
