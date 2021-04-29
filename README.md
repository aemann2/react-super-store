# React Super Store

An eCommerce app project organized and guided by @pchertude34. This Super Store has been built out according to **user stories** (see **Project Phases**), with functionality including the ability to:

- Search through a list of items
- Page through items
- Find items that are on sale
- Navigate to pages for specific items
- Add items to a shopping cart
- See a shopping cart page with a list of all added items
- Add and remove items from the cart page
- Check out

Items are pulled from [Super Store API](https://gp-super-store-api.herokuapp.com/docs/), a third-party API with item data

More info on the **Super Store** and the guided project: https://www.guidedprojects.dev/super-store/intro/

## Project phases:

### Phase 1 - Setup

1. As a Developer, I should be able to run the app with yarn start or npm start

   - We just want to get the base app working. There doesn't have to be anything special about it.

2. As a Developer, I should have access to a css style sheet in my application

   - For this task, you can load in any stylesheet you'd like, or make your own if you are into that. We don't want to opt for something like Material UI in this case, because we want practice creating our own components from a stylesheet.

3. As a User, I should see links for "Home", "Deals", and "Cart" in the navbar, along with a Company Logo

4. As a User, navigating to "/", "/deals" and "/cart" via the menu should switch the contents of the page. Clicking the Company logo should navigate the user to "/". Navigating should not reload the page.

   - Use a router such as React Router to implement page navigation. Each link "/", "/deals", and "/cart" should render a new page in the body of the application. The page doesn't have to have anything fancy on it at this point, it can just be text, but it should be different on each page.

5. As a User, the nav item for the page I am on should appear "active"

   - When a user clicks on a navlink to navigate to a different page, that navlink should appear "active" by applying some styling to it that distinguishes it from the other navlinks

### Phase 2 - Display Items

1. As a User, I should see a list of items on the "home" page. This should look similar to what is in the prototype.

   - Load data from the "/item/list" route.

   - Create a component to display the item data. This should include PropTypes for prop type checking. It should look something like the cards on the home page of the prototype

   - Create a container component to display a list of item components. This component should be used contain and render the Item cards

   - Create a component that renders the rating stars and count.

2. As a User, I should see a list of only on sale items on the "deals" page

   - This page should look and act similar to the home page, but only show items that are on sale. We don't need the search bar on this page
   - If there are no on sale items, the user should see a message stating there are no on sale items at this time.

3. As a User, clicking on the item's title or "add to cart" button will bring me to the Item's product page
   - Create a new React Page and route at "/item/:itemId" where :itemId holds the unique id of the item. This only needs to display the item's id at this point as we will add the data in the next phase

### Phase 3 - Viewing Item Pages

1. As a User, I can see the item info on the item's page
   - Implement the design of the item page so the user can see the item's image, name, description, etc.
2. As a User, I can see the item's rating, and the coresponding stars on the item cards on the home page
   - Use the component created on the previous task to render rating stars on the item cards.
3. As a User, I can select the number of items I can add to my cart.
   - Add a way for the user to be able to select the number of items to add to the cart. Make sure the user can't add more items than there are in stock.
4. As a User, I can see and error message if I try to add more item's to my cart than are in stock.
5. As a User, I should see an error message if I try to add an invalid item count to my cart
   - Adding something like a negative number, or 0, should display an error message to the user.
6. As a User, I should no longer see an error message if I add a valid amount of items to my cart
   - If the user sees an error message, and the proceeds to add a valid amount of items to their cart, the error message should be removed.

### Phase 4 - Search and Pagination

1. As a User, I can search items on the home page using the search bar

   - Create a component the implements the search bar design with a text input and a "search" button

   - Consuming components should be able to pass in an "onSearch" prop that is a function.
   - Clicking the "search" button, or pressing enter while typing into the search bar will run the "onSearch" handler with the text from the search input in the first parameter position.
   - If the search yeilds no results, the user should see a message that informs them there are no results for the search query.

2. As a User, clearing the search bar will reset my search
   - Requery all items when the user resets the search.
   - Pressing escape while focused on the search input should clear the input.
   - Pressing the "x" button next to teh search input should clear the input.
3. As a User, If there are no results for my search, I should see a message letting me know there are no results.
   - Just show some dialog letting the user know there are no results so the page is not empty.
4. As a User, I can page through items
   - The user can change pages to the first, last, next and previous page by clicking the corresponding buttons
   - If the user is on the first page, the "previous" and "first" buttons should be disabled
   - If the user is on the last page, the "next" and "last" buttons should be disabled
   - Changing pages should rerun the query to load the items for the appropriate page
   - Changing the pages should scroll the user to the top of the page.

### Phase 5 - Adding Items to Cart

1.  Create a "cart state" for the application

    - You can implement this however you like. Use something like Redux, or React Context API. I would recommend Context API because it isn't going to be a very big state and a library might be overkill.

    - We need to have the ability to add, remove, and update individual items.

2.  As a User, Clicking "Add Item" on an item's page will add my item to my cart with the specified quantity

    - The User should be able to select a quantity of items to add to the cart.

    - The User should NOT be able to add more items to their cart than are in stock.
    - Adding the item will add the item to the cart state.
    - Adding items to the cart after an item has initially been added should just update the "in cart" count.
    - The user should see a notification / alert on the screen letting them know they added the item successfully.
    - Added items will show up in a list view at the /cart route

3.  As a User, I can see how many of an item I have in my cart when I view that item's page

    - If the user goes back to an item that is in their cart, they should see a message that informs them of how many of that item are currently in their cart

4.  As a User, I should see a notification in my cart if my cart is empty

    - Just show the user something about their cart being empty when they view the cart page with nothing in their cart. Otherwise it looks weird having an empty page.

5.  As a User, I can update the "in cart count" of items in my cart at the /cart route

    - Users should be able to adjust the number of items they have in their cart on the cart page. They should not be able to change the count to more than the stock count, or below 0.

6.  As a User, I can remove Items from my cart

    - Users should be able to remove items from their cart by either clicking a "remove" button, or updating their "in cart count" to 0

7.  As a User, I can see the total of all my items at the bottom of the cart page

    - Add up the price of all of the items and display it below the list

8.  As a User, I can see a pill notification on the cart nav button that shows the number of items in my cart

    - Add a pill that displays the total count of items in the user's cart

9.  As a User, I can check out

    - Clicking the "check out" button at the bottom of the cart list should clear the cart state and bring the user to a "Check Out" page that has a thank you message. We will expand on this in future phases.

10. As a User, I can return to the home page from the checkout page

    - Show a button on the checkout page that when clicked will bring the user back to the home page.
