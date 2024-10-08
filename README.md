 
 # The Draggable

## Installation
To install **The Draggable**, you can use npm. Run the following command in your terminal:

```bash
npm install thedraggable
```

**The Draggable** is a simple and lightweight React component that allows users to drag elements around the screen using both mouse and touch events. This package provides an easy way to integrate draggable functionality into your React applications.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)
- [License](#license)

## Features
- Dragging support for mouse and touch devices.
- Easy-to-use API with customizable properties.
- Lightweight and efficient.



## Usage
Import the `DraggableComponent` from the package and use it in your React component. You can specify the initial position and a callback for when dragging ends.

```jsx
import React from 'react';
import { DraggableComponent } from 'thedraggable';

const App = () => {
  return (
    <div>
      <DraggableComponent
        initialPosition={{ x: 100, y: 100 }}
        onDragEnd={(position) => console.log('New Position:', position)}
      />
    </div>
  );
};

export default App;
```

## Props
The `DraggableComponent` accepts the following props:

| Prop               | Type                        | Default              | Description                                                  |
|--------------------|----------------------------|----------------------|--------------------------------------------------------------|
| `initialPosition`  | `{ x: number, y: number }` | `{ x: 0, y: 0 }`     | Sets the initial position of the draggable element.          |
| `onDragEnd`        | `function`                 | `() => {}`           | Callback function triggered when dragging ends, receiving the new position as an argument. |

## Example
Here’s a complete example of how to use the `DraggableComponent`:

```jsx
import React from 'react';
import { DraggableComponent } from 'thedraggable';

const ExampleApp = () => {
  const handleDragEnd = (position) => {
    console.log('Dragged to position:', position);
  };

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <DraggableComponent
        initialPosition={{ x: 50, y: 50 }}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default ExampleApp;
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information, feel free to check the source code or contact the maintainer. Happy coding!
```

### Key Sections Explained:
- **Table of Contents**: Makes it easy for users to navigate through the documentation.
- **Features**: Highlights the key functionalities of your package.
- **Installation**: Simple instructions on how to install the package.
- **Usage**: Basic example to show how to implement the component in a React application.
- **Props**: Detailed explanation of what props are available for customization.
- **Example**: A complete code snippet demonstrating the component in action.
- **License**: Information on the licensing of the package.

Feel free to modify any sections to better suit your package or to include additional details. Let me know if you need any more help!