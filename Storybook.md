# Storybook

## What is it

Storybook.js is a tool for developing, testing, and showcasing UI components in isolation from the application they will be used in. It provides an interactive interface for testing components in various states and allows developers to document and share these components with others on their team or in the community. Storybook.js is often used in conjunction with component-driven development practices, which emphasize the creation of reusable components as building blocks for user interfaces.

## Benefits

The benefits of using Storybook.js include the ability to develop, test, and document UI components in a modular and isolated way, making it easier to maintain and update components over time. It also enables faster iteration and collaboration by providing a centralized location for developers to share and review UI components.

## What is a story?

A Story is a way of encapsulating a component and describing its different states or variations. A story is composed of a series of inputs (known as props) and their resulting outputs (the component rendered with those props), which allow developers to test and showcase the functionality of a component in isolation from the rest of the application.

In JavaScript, stories are objects which `args` defines a component in one of its many possible states, based on the `props` passed in `args`. For example, a Button component might have stories that showcase it in different sizes, colors, and states (such as disabled or active).

## Getting started

1. `npx sb init --builder @storybook/builter-vite --type react`

2. Pick a component and create a `.stories.ts` file for it.

3. This file should export a default `Meta` object which determines where the story will appear in the story list and accepts a variety of arguments that describe all story variants. Additionally, the file should export each desired variant as a named `StoryObj` object. This object accepts arguments that describe how to render the story.

    ```tsx
    import type { Meta, StoryObj } from '@storybook/react';
    import { Component, ComponentProps } from './Component';

    export default {
      title: 'ComponentName',
      component: Component,
      decorators: [ ... ],
      parameters: { ... }
    } as Meta<ComponentProps>

    export const Primary: StoryObj<typeof Button> = {
      args: { 
        primary: true
      } 
    }

    Primary.displayName = 'Some descriptful name'

    export const Secondary = StoryObj<ComponentProps> = { 
      ... 
    }
    ```

## Concepts

1. `args` → stories as `props` → React

2. `parameters` is used to provide additional information about a story or configure the behavior of the Storybook UI. For example, set various background colors to test the contrast.

3. `decorators` is used to wrap some component in arbitrary markup, layout, context providers or mocking data providers.

4. `argTypes` is an object that defines the arguments (or props) for a component story and their respective control types. These control types determine how the arguments are displayed and manipulated in the Storybook UI, allowing developers to interactively tweak the props of a component to see how it behaves in different scenarios. The `argTypes` object is passed to the `Meta` object in a component story file and can be used to define any number of props and their respective control types.

5. `play` is used to automate tests that need user’s actions, such as filling form out.

### `render`?

`render` functions allow for more flexibility and control over how components are rendered in stories, and are particularly useful for rendering components with complex or dynamic behavior. With `render` functions, developers can programmatically control the props passed to a component, simulate user interactions, and perform other actions as necessary to showcase a component's behavior and functionality.
