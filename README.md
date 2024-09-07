# OneZero - Frontend Interview Task

This project is the frontend implementation of a dynamic menu system that fetches data from a given URL, stores it in Redux, and dynamically displays the data on the screen based on user interactions.

## Task Description

The purpose of this task is to fetch data from a provided URL, store it using Redux, and display it dynamically based on the required design. Below are the steps and details of the task:

### Requirements

1. **Fetching Data from URL**:
    - Send a request to the given URL: `http://localhost:5000/menu.json`.
    - Store the retrieved data in the Redux store.

2. **Dynamic Category Display**:
    - Categories must be displayed dynamically based on the fetched data.
    - Categories and products should be filtered by `isArchived`.
    - Each category should be clickable, like a button or tab, to filter the products.

    **Design Link**: [Figma Design](https://www.figma.com/design/Bx81HNqNgvOlFwS0sYQCK5/Front-Task?node-id=1-170&node-type=FRAME&t=W6RcRILVWMn3tv3w-0)

3. **Displaying Products by Category**:
    - When a category is clicked, only products from that category should be displayed.
    - When "All" is selected, products from all categories should be displayed with category headings.

4. **Product Detail Modal**:
    - Clicking on any product should open a modal window displaying detailed information about the selected product.

## Technologies Used

- **Redux Toolkit**: To manage the global state of categories, products, and modal visibility.
- **SCSS**: For styling the application according to the design requirements.
- **React**: For building the dynamic user interface.

## Features

- **Dynamic Data Fetching**: Retrieves menu data from the given URL and stores it in Redux.
- **Category Filtering**: Dynamically filters products by category and shows all products when "All" is selected.
- **Product Detail Modal**: Displays product details in a modal upon clicking a product.
- **Responsive Design**: The UI is fully responsive and adapts to various screen sizes.
