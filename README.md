# Server Side README

This repository contains the server-side code for the project. It provides APIs for managing blog posts.

## Installation

To run the server locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

## API Endpoints

| Request           | URL              | Description                                |
|-------------------|------------------|--------------------------------------------|
| `getAllBlogPosts`| `/blog`          | Get all blog posts                         |
| `getBlogPost`    | `/blog/:id`      | Get a specific blog post by ID             |
| `addNewBlogPost` | `/blog`          | Create a new blog post                     |
| `updateBlogPost` | `/blog/:id`      | Update an existing blog post by ID         |
| `deleteBlogPost` | `/blog/:id`      | Delete a blog post by ID                   |
