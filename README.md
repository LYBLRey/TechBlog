# TechBlog

## Description

Motivation for this project was to be able to create a special function when user is logged in, which allows saved posts.
I built this project so then userS could come in and be able to post threads/articles of tech talk!
The problem that this solves is being able to find articles (with headlines and date of creation) to stay up to date with trends!
I learned how to use json to create articles which allows posts!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- Git clone the repo (https://github.com/LYBLRey/TechBlog)
- Install npm i or (to be safe) npm i handlebars path express express-session express-handlebars connect-session-sequelize mysql sequelize dotenv bcrypt mysql2
- Make an .env file and follow the example and input your root, password, and db name accordingly!
- Copy the schema.sql code and paste it into your mySQL workbench!
- IN the terminal, node seeds/seed.js
- Finally, node server.js

## Usage

    ![tech blog](images\techBlog.PNG)

## Credits

- https://stackoverflow.com/questions/46725828/table-db-sessions-doesnt-exist/46729080
- https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-schema/
- https://git-scm.com/docs/git-stash
- https://developer.apple.com/documentation/apple_news/apple_news_format/json_concepts_and_article_structure

## License

MIT License

Copyright (c) 2021 Sareybodd Chhorn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
