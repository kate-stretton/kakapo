import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../index'
import { fetchKakapo } from '../actions'

jest.mock('../actions')

fetchKakapo.mockImplementation(() => () => {})

describe('<App/>', () => {
  it('dispatchs fetchKakapo action', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect.assertions(1)
    expect(fetchKakapo).toHaveBeenCalled()
  })
})
