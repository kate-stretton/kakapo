import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import AddKakapo from './AddKakapo'
import { saveKakapo } from '../actions'
import { useDispatch } from 'react-redux'

jest.mock('react-redux')
jest.mock('../actions')

describe('<AddKakapo/>', () => {
  it('dispatches correct action when form submitted', () => {
    //saveKakapo.mockReturnValue('kakapo')
    const fakeDispatch = jest.fn()
    useDispatch.mockReturnValue(fakeDispatch)
    render(<AddKakapo />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Kate' } })
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(fakeDispatch).toHaveBeenCalledWith(saveKakapo())
  })
})

//was dispatch called with the right action?
