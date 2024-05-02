import { fireEvent, render } from '@testing-library/react'
import { vi } from 'vitest'

import { Toast } from '.'

describe('<Toast />', () => {
  vi.useFakeTimers()
  const mockHandleClose = vi.fn()

  vi.clearAllMocks()

  it('renders without errors', () => {
    render(<Toast type="success" message="Success message" show handleDismissToast={mockHandleClose} position={'bottom-right'} />)
  })

  it('should render success toast', () => {
    const { getByText, getByTestId } = render(
      <Toast type={'success'} message={'Success message'} show handleDismissToast={mockHandleClose} position={'bottom-right'} />
    )
    const successText = getByText('Success message')
    const icon = getByTestId('circle-check')

    expect(successText).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
  it('should render warning toast', () => {
    const { getByText, getByTestId } = render(
      <Toast type={'warning'} message={'Warning message'} show handleDismissToast={mockHandleClose} position={'bottom-right'} />
    )
    const warningText = getByText('Warning message')
    const icon = getByTestId('triangle-alert')

    expect(warningText).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
  it('should render error toast', () => {
    const { getByText, getByTestId } = render(
      <Toast type={'error'} message={'Error message'} show handleDismissToast={mockHandleClose} position={'bottom-right'} />
    )
    const errorText = getByText('Error message')
    const icon = getByTestId('circle-x')

    expect(errorText).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should close the toast when close button is clicked', () => {
    const { getByTestId } = render(<Toast type={'success'} message={'Success message'} show handleDismissToast={mockHandleClose} position={'bottom-right'} />)
    const closeIcon = getByTestId('x-icon')
    fireEvent.click(closeIcon)

    expect(mockHandleClose).toBeCalled()
  })
})
