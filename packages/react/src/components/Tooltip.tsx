import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { keyframes, styled } from '../styles'

/* 
  Styles
*/
const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const TooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  boxShadow: '0 0.5rem 1.5rem rgba(0, 0, 0, 0.2)',
  padding: '0.75rem 1rem',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  "&[data-state='delayed-open'][data-side='top']": {
    animationName: slideDownAndFade,
  },
  "&[data-state='delayed-open'][data-side='right']": {
    animationName: slideLeftAndFade,
  },
  "&[data-state='delayed-open'][data-side='bottom']": {
    animationName: slideUpAndFade,
  },
  "&[data-state='delayed-open'][data-side='left']": {
    animationName: slideRightAndFade,
  },
})

const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
  height: '0.5rem',
  width: '1rem',
})

/* 
  Component
*/
export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  content: string
  children: ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
