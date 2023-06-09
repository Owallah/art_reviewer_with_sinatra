# [ArtVista](https://owallah.github.io/art_reviewer_with_sinatra/)

This is an Art Reviewing App that allows viewers to review artworks and artists to manage their arts. 
The app is built with a React frontend and a Sinatra and Active Record backend API using Ruby.

## Features

- Artists can:
  - Create a new art
  - Read all the reviews on the art
  - Update an art
  - Delete the art

- Viewers can:
  - Create a review for an art
  - Read all the reviews on that art
  - Update the review
  - Delete the review

## Installation

To run the Art Reviewing App locally, you'll need to have Ruby and Node.js installed on your machine.

### Backend Setup

1. Clone this repository to your local machine from [here](https://github.com/Owallah/phase-3-sinatra-react-project.git).
2. Navigate to the backend directory: `cd phase-3-sinatra-react-project`.
3. Install the required Ruby gems: `bundle install`.
4. Set up the database by running the migrations: `bundle exec rake db:migrate`.
5. Start the Sinatra server: `bundle exec rackup`.

The backend server should now be running on `http://localhost:9292`.

### Frontend Setup
1. Clone this repository to your local machine from [here](https://github.com/Owallah/art_reviewer_with_sinatra.git).
2. Navigate to the frontend directory: `cd art_reviewer_with_sinatra`.
3. Install the dependencies: `npm install`.
4. Start the React development server: `npm run dev`.

The frontend app should now be running on `http://localhost:3000`.

## API Endpoints

- `/artists`:
  - `GET /artists`: Get a list of all artists.
  - `POST /artists`: Create a new artist.

- `/artists/:id`:
  - `GET /artists/:id`: Get details of a specific artist.
  - `PATCH /artists/:id`: Update an artist.
  - `DELETE /artists/:id`: Delete an artist.

- `/arts`:
  - `GET /arts`: Get a list of all arts.
  - `POST /art`: Create a new art.

- `/arts/:id`:
  - `GET /arts/:id`: Get details of a specific art.
  - `PATCH /arts/:id`: Update an art.
  - `DELETE /arts/:id`: Delete an art.

- `/arts/:id/reviews`:
  - `GET /arts/:id/reviews`: Get all reviews for a specific art.
  - `POST /arts/:id/reviews`: Create a review for a specific art.

- `/reviews/:id`:
  - `PATCH /reviews/:id`: Update a review.
  - `DELETE /reviews/:id`: Delete a review.

## Technologies Used

- React js
- Sinatra
- Ruby
- SQLite
- ActiveRecord

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by the love for art and the desire to create a platform for art enthusiasts to share their thoughts and reviews.
- Special thanks to the developers of React, Sinatra, and all the libraries and tools used in this project.
