import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps, ReactNode } from 'react'
import { keyframes, styled } from '../styles'
import { X } from 'phosphor-react'

/* 
  Styles
*/
const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + $$viewportPadding))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + $$viewportPadding))',
  },
})

const Root = styled(RadixToast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '0.75rem 1.25rem',
  display: 'grid',
  gridTemplateAreas: "'title action' 'description description'",
  gridTemplateColumns: '1fr min-content',
  columnGap: '0.25rem',
  alignItems: 'center',

  "&[data-state='open']": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&[data-state='closed']": {
    animation: `${hide} 100ms ease-in`,
  },
  "&[data-swipe='move']": {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  "&[data-swipe='end']": {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

const Trigger = styled('button', {
  all: 'unset',
})

const Title = styled(RadixToast.Title, {
  gridArea: 'title',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

const Description = styled(RadixToast.Description, {
  gridArea: 'description',
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})

const Action = styled(RadixToast.Action, {
  gridArea: 'action',
  marginRight: 'auto',
  color: '$gray200',
})

const Viewport = styled(RadixToast.Viewport, {
  $$viewportPadding: '2rem',
  padding: '$$viewportPadding',
  width: '22.5rem',
  maxWidth: '90vw',
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 2147483647,
})

/* 
  Component
*/
export interface ToastProps extends ComponentProps<typeof RadixToast.Root> {
  children: ReactNode
  title: string
  dateTime: Date
  description: string
  open: boolean
  setOpen: (open: boolean) => void
}

export function Toast({
  children,
  title,
  dateTime,
  description,
  open,
  setOpen,
  duration = 5000,
  ...props
}: ToastProps) {
  return (
    <RadixToast.Provider>
      <Trigger onClick={() => setOpen(true)}>{children}</Trigger>
      <Root open={open} onOpenChange={setOpen} duration={duration} {...props}>
        <Title>{title}</Title>
        <Description asChild>
          <time dateTime={dateTime.toISOString()}>{description}</time>
        </Description>
        <Action asChild altText="Close toast">
          <X size={20} />
        </Action>
      </Root>
      <Viewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'
