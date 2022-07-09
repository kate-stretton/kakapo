import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import AddKakapo from './AddKakapo'

import { useDispatch } from 'react-redux'

jest.mock('react-redux')

describe('<AddKakapo/>', () => {
  it('dispatches correct action when form submitted', () => {
    const fakeDispatch = jest.fn()
    useDispatch.mockReturnValue(fakeDispatch)
    render(<AddKakapo />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(fakeDispatch).toHaveBeenCalled()
  })
})
